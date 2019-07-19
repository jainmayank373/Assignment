"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Service = require("./service");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var RestController = /** @class */ (function () {
    function RestController() {
        this.service = new Service.service();
        this.myApp = app;
    }
    RestController.prototype.getData = function () {
        this.myApp.get('/doctors/{docterid}', function (req, res, next) {
            console.log("Hello", req.param);
            res.send("Ok!");
        });
    };
    RestController.prototype.postData = function () {
        var _this = this;
        this.myApp.post('/doctors', function (req, res, next) {
            console.log("Data Created .....", req.body);
            _this.service.createRecords(req.body, res);
        });
    };
    return RestController;
}());
exports.RestController = RestController;
