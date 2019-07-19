"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Service = require("./services/doctorServices");
var validate = require("./validator");
var doctorsController = require("./controllers/doctorsController");
var patientsController = require("./controllers/patientsController");
var patientsService = require("./services/patientsService");
var validationResult = require('express-validator').validationResult;
var bodyParser = require('body-parser');
var myApp = express();
myApp.use(bodyParser.urlencoded({ extended: false }));
myApp.use(bodyParser.json());
var Main = /** @class */ (function () {
    function Main() {
        this.doctorsService = new Service.service();
        this.pateintsService = new patientsService.service();
        this.service = {
            doctor: this.doctorsService,
            patient: this.pateintsService
        };
        this.app = myApp;
    }
    Main.prototype.validator = function (req, res, next) {
        console.log(req, res);
        next();
    };
    Main.prototype.main = function () {
        doctorsController.DoctorsCOntroller.controllers(this.app, this.service, validate);
        patientsController.Patient.controllers(this.app, this.service, validate);
        this.app.listen(3000);
    };
    return Main;
}());
exports.Main = Main;
var main = new Main();
main.main();
