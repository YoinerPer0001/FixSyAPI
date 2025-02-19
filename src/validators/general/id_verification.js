import { param, validationResult } from "express-validator";

export const idVerification = [
    param('id')
    .notEmpty().withMessage("Param id cannot be empty")
    .isUUID().withMessage("The format value is incorrect"),

    (req, res, next)=>{
        const errors = validationResult(req) // resut validation
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        next();
    }
]