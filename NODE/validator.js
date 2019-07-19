"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('express-validator'), check = _a.check, validationResult = _a.validationResult;
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.validate = function (req) {
        var errors = validationResult(req);
        if (!errors.isEmpty()) {
            return errors;
        }
        return null;
    };
    Validator.postValidaters = [
        check('name').isLength({ min: 3, max: 15 }),
        check('username').isEmail(),
        check('password').isLength({ min: 5, max: 18 }),
        check('phone').isNumeric().isLength({ min: 10, max: 10 })
    ];
    Validator.putValidaters = [
        check('name').isLength({ min: 3, max: 15 }),
        check('phone').isNumeric().isLength({ min: 10, max: 10 })
    ];
    return Validator;
}());
exports.Validator = Validator;
