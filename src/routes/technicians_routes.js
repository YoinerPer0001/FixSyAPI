import express from "express";
import { updateValidator } from "../validators/technicians_validator.js";
import technicians_controller from "../controllers/technicians_controller.js";

const techRoutes = express.Router()

techRoutes.put("/tech/update/:id", updateValidator, technicians_controller.update)

export default techRoutes