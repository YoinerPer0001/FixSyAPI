import especialties_service from "../services/especialties_service.js";

class EspecialtiesController{

    async getAll(req, res){
        try {
            const response = await especialties_service.getAll()
            res.status(response.code).json(response.message)

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

}

export default new EspecialtiesController()