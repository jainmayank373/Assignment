import express = require('express');

export class DoctorsCOntroller {

    static controllers(app: any, service: any, validate: any) {

        /**
         * Getting doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         */
        app.get('/doctors/:username', (req: express.Request, res: express.Request, next: any) => {

            //            console.log("Hello", check,validationResult);
            service.doctor.findById(req.params.username, res);

        });



        /**
         * Getting list of patient for particular doctor
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         */
        app.get('/doctors/:username/patients', (req: express.Request, res: express.Request, next: any) => {
            service.patient.findByIds(req.params.username, res);



        })

        /**
         * Creating doctor 
         * @param restEndPoint "/doctors"
         * @param callback callback function
         * req object contains the body of request
         */
        app.post('/doctors', validate.Validator.postValidaters, (req: express.Request, res: express.Response, next: Function) => {
            console.log("Data Created")

            const err = validate.Validator.validate(req);
            if (err)
                res.status(422).json({ error: err.array() });
            else
                service.doctor.createRecords(req.body, res);
        })


        /**
         * Updating doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         * req object contains the body of request
         */
        app.put("/doctors/:username", validate.Validator.putValidaters, (req: express.Request, res: express.Response, next: Function) => {

            const err = validate.Validator.validate(req);
            if (err)
                res.status(422).json({ error: err.array() });
            else
                service.doctor.updateRecords(req.params.username, req.body, res);


        })

        /**
         * Getting doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         */
        app.delete("/doctors/:username", (req: express.Request, res: express.Response, next: Function) => {

            service.doctor.deleteRecords(req.params.username, res);

        })

    }
}