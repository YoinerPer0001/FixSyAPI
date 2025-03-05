import express from "express"
import tech_esp_controller from "../controllers/tech_esp_controller.js"
import { createValidator } from "../validators/tech_esp_validator.js"
import { idVerification } from "../validators/general/id_verification.js"

const tech_espRoutes = express.Router()

tech_espRoutes.get("/technicians/especialties/:id", idVerification, tech_esp_controller.getTechnicianEspecialties)
tech_espRoutes.post("/technicians/especialties/create", createValidator, tech_esp_controller.create)

export default tech_espRoutes