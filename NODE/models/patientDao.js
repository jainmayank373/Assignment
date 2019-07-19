"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatientModel = /** @class */ (function () {
    function PatientModel(username, password, dob, phone, doctorsId) {
        this.username = username;
        this.password = password;
        this.dob = dob;
        this.phone = phone;
        this.doctorsId = doctorsId;
    }
    PatientModel.prototype.getUsername = function () {
        return this.username;
    };
    PatientModel.prototype.getDoctorsId = function () {
        return this.doctorsId;
    };
    PatientModel.prototype.getPassword = function () {
        return this.password;
    };
    PatientModel.prototype.getDob = function () {
        return this.dob;
    };
    PatientModel.prototype.getPhone = function () {
        return this.phone;
    };
    PatientModel.prototype.setUsername = function (username) {
        this.username = username;
    };
    PatientModel.prototype.setPassword = function (password) {
        this.password = password;
    };
    PatientModel.prototype.setDob = function (dob) {
        this.dob = dob;
    };
    PatientModel.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    PatientModel.prototype.setDoctorsId = function (doctorsId) {
        this.doctorsId = doctorsId;
    };
    return PatientModel;
}());
exports.PatientModel = PatientModel;
