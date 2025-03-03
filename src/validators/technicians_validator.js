import { body, param, validationResult } from "express-validator";

export const updateValidator = [
    param("id")
    .notEmpty().withMessage("This value cannot be empty")
    .isUUID().withMessage("This value must be id"),
    body().notEmpty().withMessage("no data to update"),
    body("user_id").optional()
    .notEmpty().withMessage("This value cannot be empty")
    .isUUID().withMessage("This value must be id"),
    body("experience")
    .optional()
    .notEmpty().withMessage("This value cannot be empty")
    .isString().withMessage("The value must be string"),

    body("certificates")
    .optional()
    .notEmpty().withMessage("This value cannot be empty")
    .isString().withMessage("The value must be string"),

    body("qualification")
    .optional()
    .notEmpty().withMessage("This value cannot be empty")
    .isNumeric().withMessage("The value must be number"),

    body("state")
    .optional()
    .custom(async value => {

        if(value != "pending" && value != "active" && value != "suspend" ){
            throw new Error("Type value is invalid");
        }
    }).withMessage("state value is invalid"),

    (req, res, next)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(500).json({errors:errors.array()})
        }

        next();
    }

]