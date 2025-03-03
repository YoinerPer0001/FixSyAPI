import Technicians from "../models/technicians_model.js";
import Users from "../models/user_model.js";


class TechniciansRepository {

    async getById(id){
        try {
            return Technicians.findByPk(id)
        } catch (error) {
            throw new Error("Error to get user: ", error);
        }
    }

    async getByIdNumber(id){
        try {
            return Technicians.findOne({where: {user_id: id},  include: {model: Users, as: "basicInfo"}})
        } catch (error) {
            throw new Error("Error to get user: ", error);
        }
    }

    async create(techData){
    
        try {
            const response = await Technicians.create(techData);
            return response.dataValues.id;
        } catch (error) {
            throw new Error("Error to create: ", error);
        }
    }

    async update(id, newData){
        
        try {

            const tech = await Technicians.update(newData, {where: {id: id}});
            return tech;

        } catch (error) {
            throw new Error("Error to update: ", error.message);
        }
        
    }
}

export default new TechniciansRepository()