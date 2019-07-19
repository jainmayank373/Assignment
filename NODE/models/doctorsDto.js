"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoctorsDto = /** @class */ (function () {
    function DoctorsDto(username, dob, phone) {
        this.username = username;
        this.dob = dob;
        this.phone = phone;
    }
    DoctorsDto.prototype.getUsername = function () {
        return this.username;
    };
    DoctorsDto.prototype.getDob = function () {
        return this.dob;
    };
    DoctorsDto.prototype.getPhone = function () {
        return this.phone;
    };
    DoctorsDto.prototype.setUsername = function (username) {
        this.username = username;
    };
    DoctorsDto.prototype.setDob = function (dob) {
        this.dob = dob;
    };
    DoctorsDto.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    return DoctorsDto;
}());
exports.DoctorsDto = DoctorsDto;
