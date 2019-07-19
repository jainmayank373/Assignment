"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Patient = /** @class */ (function () {
    function Patient() {
    }
    Patient.controllers = function (app, service, validate) {
        /// PATIENTS CONTROLLER/////
        /**
         * Getting doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         */
        app.get('/patients/:username', function (req, res, next) {
            //            console.log("Hello", check,validationResult);
            service.patient.findPatientById(req.params.username, res);
        });
        /**
         * Creating doctor
         * @param restEndPoint "/doctors"
         * @param callback callback function
         * req object contains the body of request
         */
        app.post('/patients', validate.Validator.postValidaters, function (req, res, next) {
            console.log("Data Created");
            var err = validate.Validator.validate(req);
            if (err)
                res.status(422).json({ error: err.array() });
            else
                service.patient.createRecords(req.body, res);
        });
        /**
         * Updating doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         * req object contains the body of request
         */
        app.put("/patients/:username", validate.Validator.putValidaters, function (req, res, next) {
            var err = validate.Validator.validate(req);
            if (err)
                res.status(422).json({ error: err.array() });
            else
                service.patient.updateRecords(req.params.username, req.body, res);
        });
        /**
         * Getting doctor details with unique userId/username
         * @param restEndPoint "/doctors/:username"
         * @param callback callback function
         */
        app.delete("/patients/:username", function (req, res, next) {
            service.patient.deleteRecords(req.params.username, res);
        });
    };
    return Patient;
}());
exports.Patient = Patient;
