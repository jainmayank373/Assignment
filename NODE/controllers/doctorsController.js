"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoctorsCOntroller = /** @class */ (function () {
    function DoctorsCOntroller() {
    }
    DoctorsCOntroller.controllers = function (app, service, validate) {
        /**
         * Getting doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         */
        app.get('/doctors/:username', function (req, res, next) {
            //            console.log("Hello", check,validationResult);
            service.doctor.findById(req.params.username, res);
        });
        /**
         * Getting list of patient for particular doctor
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         */
        app.get('/doctors/:username/patients', function (req, res, next) {
            service.patient.findByIds(req.params.username, res);
        });
        /**
         * Creating doctor
         * @param restEndPoint "/doctors"
         * @param callback callback function
         * req object contains the body of request
         */
        app.post('/doctors', validate.Validator.postValidaters, function (req, res, next) {
            console.log("Data Created");
            var err = validate.Validator.validate(req);
            if (err)
                res.status(422).json({ error: err.array() });
            else
                service.doctor.createRecords(req.body, res);
        });
        /**
         * Updating doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         * req object contains the body of request
         */
        app.put("/doctors/:username", validate.Validator.putValidaters, function (req, res, next) {
            var err = validate.Validator.validate(req);
            if (err)
                res.status(422).json({ error: err.array() });
            else
                service.doctor.updateRecords(req.params.username, req.body, res);
        });
        /**
         * Getting doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         */
        app.delete("/doctors/:username", function (req, res, next) {
            service.doctor.deleteRecords(req.params.username, res);
        });
    };
    return DoctorsCOntroller;
}());
exports.DoctorsCOntroller = DoctorsCOntroller;
