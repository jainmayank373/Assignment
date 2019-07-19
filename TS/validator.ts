
const { check, validationResult } = require('express-validator');

export class Validator {
    static postValidaters = [
        check('name').isLength({ min: 3, max: 15 }),
        check('username').isEmail(),
        check('password').isLength({ min: 5, max: 18 }),
        check('phone').isNumeric().isLength({ min: 10, max: 10 })
    ]

    static putValidaters = [
        check('name').isLength({ min: 3, max: 15 }),
        check('phone').isNumeric().isLength({ min: 10, max: 10 })
    ]
    static validate(req: any) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return errors;
        }
        return null;
    }
}