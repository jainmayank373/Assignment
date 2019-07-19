import express = require('express');
import Service = require("./services/doctorServices");
import validate = require("./validator");

import doctorsController = require("./controllers/doctorsController");
import patientsController = require("./controllers/patientsController");
import patientsService = require("./services/patientsService");

const { validationResult } = require('express-validator');


var bodyParser = require('body-parser')
const myApp: express.Application = express();

myApp.use(bodyParser.urlencoded({ extended: false }))
myApp.use(bodyParser.json())

export class Main {
    doctorsService = new Service.service();
    pateintsService = new patientsService.service();
    service = {
        doctor:this.doctorsService,
        patient:this.pateintsService
    }
    app = myApp;

    validator(req: express.Request, res: express.Response, next: any) {
        console.log(req, res);
        next();
    }
    main() {

        doctorsController.DoctorsCOntroller.controllers(this.app,this.service,validate);
        patientsController.Patient.controllers(this.app,this.service,validate);


        

        this.app.listen(3000);
    }
}

var main = new Main();
main.main();