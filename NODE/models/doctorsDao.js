"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoctorsModel = /** @class */ (function () {
    function DoctorsModel(username, password, dob, phone, patientsId) {
        this.username = username;
        this.password = password;
        this.dob = dob;
        this.phone = phone;
        this.patientsId = patientsId;
    }
    DoctorsModel.prototype.getUsername = function () {
        return this.username;
    };
    DoctorsModel.prototype.getPassword = function () {
        return this.password;
    };
    DoctorsModel.prototype.getDob = function () {
        return this.dob;
    };
    DoctorsModel.prototype.getpatientsId = function () {
        return this.patientsId;
    };
    DoctorsModel.prototype.getPhone = function () {
        return this.phone;
    };
    DoctorsModel.prototype.setUsername = function (username) {
        this.username = username;
    };
    DoctorsModel.prototype.setPassword = function (password) {
        this.password = password;
    };
    DoctorsModel.prototype.setDob = function (dob) {
        this.dob = dob;
    };
    DoctorsModel.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    DoctorsModel.prototype.setpate = function (patientsId) {
        this.patientsId = patientsId;
    };
    return DoctorsModel;
}());
exports.DoctorsModel = DoctorsModel;
