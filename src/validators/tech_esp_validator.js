import { validationResult, body, param } from "express-validator";

export const createValidator = [
    body("id_tech")
    .notEmpty().withMessage("This value cannot be empty")
    .isUUID().withMessage("This value must be id"),

    body("id_esp")
    .notEmpty().withMessage("This value cannot be empty")
    .isUUID().withMessage("This value must be id"),

    (req, res, next) => { 

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(500).json({errors:errors.array()})
        }

        next();
    }

] 
