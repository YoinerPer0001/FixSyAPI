import { body, param, validationResult } from "express-validator";
import roles_service from "../services/roles_service.js";

export const loginValidator = [
    body('email')
    .notEmpty().withMessage("This value cannot be empty")
    .isEmail().withMessage("This param must be an email format"),
    body('password')
    .notEmpty().withMessage("This value cannot be empty")
    .isLength({min: 8, max: 50}).withMessage("Value out of range"),
    body('type')
    .notEmpty().withMessage("This value cannot be empty")
    .isString().withMessage("The value must be string")
    .custom(async value =>{
        
        const rol_id = await roles_service.getIdRolxName(value);
        if(!rol_id){
            throw new Error("Type value is invalid");
        }
    }).withMessage("Type value is invalid"),
    
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
    .isLength({min: 8, max: 50}).withMessage("Value out of range"),

    body('address')
    .notEmpty().withMessage("This value cannot be empty")
    .isString().withMessage("The value must be string"),

    body('id_num_type')
    .notEmpty().withMessage("This value cannot be empty")
    .isString().withMessage("The value must be string")
    .isLength({max:2}).withMessage("Value must be 2 characters 'CC', 'TI', 'CE'")
    .isUppercase().withMessage("Value must be uppercase"),

    body('type')
    .notEmpty().withMessage("This value cannot be empty")
    .isString().withMessage("The value must be string")
    .custom(async value =>{
        
        const rol_id = await roles_service.getIdRolxName(value);
        if(!rol_id){
            throw new Error("Type value is invalid");
        }
    }).withMessage("Type value is invalid"),

    (req, res, next)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(500).json({errors:errors.array()})
        }
        next();
    }

]