import { body, param, validationResult } from "express-validator";

export const loginValidator = [
    body('email')
    .notEmpty().withMessage("This value cannot be empty")
    .isEmail().withMessage("This param must be an email format"),
    body('password')
    .notEmpty().withMessage("This value cannot be empty")
    .isLength({min: 8, max: 50}).withMessage("Value out of range"),
    
    (req, res, next)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(500).json({errors: errors.array()})
        }

        next()
    }
]

export const UserDataValidator = [
    body('name')
    .notEmpty().withMessage("This value cannot be empty")
    .isString().withMessage("The value must be string")
    .isLength({max:100}).withMessage("Value out of range"),

    body('email')
    .notEmpty().withMessage("This value cannot be empty")
    .isEmail().withMessage("This param must be an email format"),

    body('id_number')
    .notEmpty().withMessage("This value cannot be empty")
    .isInt().withMessage("This value must be integer"),

    body('phone')
    .isMobilePhone().withMessage("The mobile phone format is not valid"),

    body('password')
    .notEmpty().withMessage("This value cannot be empty")
    .isString().withMessage("The value must be string"),

    body('address')
    .notEmpty().withMessage("This value cannot be empty")
    .isString().withMessage("The value must be string"),

    (req, res, next)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(500).json({errors:errors.array()})
        }

        next();
    }

]