import Especialties from "../models/especialties_model.js";


class EspecialtiesRepository {

    async getAll(){
        const response = await Especialties.findAll({attributes: {exclude: ["createdAt", "updatedAt"]}});
        return response
    }

    async getbyId(id){
        const response = await Especialties.findByPk(id);
        return response
    }
}

export default new EspecialtiesRepository();