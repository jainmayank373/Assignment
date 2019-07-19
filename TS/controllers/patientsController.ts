import express = require('express');

export class Patient {
    static controllers(app: any, service: any, validate: any) {
        /// PATIENTS CONTROLLER/////

        /**
         * Getting doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         */
        app.get('/patients/:username', (req: express.Request, res: express.Response, next: Function) => {

            //            console.log("Hello", check,validationResult);
            service.patient.findPatientById(req.params.username, res);

        });



        /**
         * Creating doctor 
         * @param restEndPoint "/doctors"
         * @param callback callback function
         * req object contains the body of request
         */
        app.post('/patients', validate.Validator.postValidaters, (req: express.Request, res: express.Response, next: Function) => {
            console.log("Data Created")

            const err = validate.Validator.validate(req);
            if (err)
                res.status(422).json({ error: err.array() });
            else
                service.patient.createRecords(req.body, res);
        })


        /**
         * Updating doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         * req object contains the body of request
         */
        app.put("/patients/:username", validate.Validator.putValidaters, (req: express.Request, res: express.Response, next: Function) => {

            const err = validate.Validator.validate(req);
            if (err)
                res.status(422).json({ error: err.array() });
            else
                service.patient.updateRecords(req.params.username, req.body, res);


        })

        /**
         * Getting doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         */
        app.delete("/patients/:username", (req: express.Request, res: express.Response, next: Function) => {

            service.patient.deleteRecords(req.params.username, res);

        })

    }
}