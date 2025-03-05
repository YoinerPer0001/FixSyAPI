import express from "express"
import especialties_controller from "../controllers/especialties_controller.js"

const especialtiesRoutes = express.Router()

especialtiesRoutes.get("/specialties", especialties_controller.getAll)

export default especialtiesRoutes