import tech_esp_repository from "../repository/tech_esp_repository.js";
import especialties_service from "./especialties_service.js";
import technicians_service from "./technicians_service.js";


class Tech_Esp_Service {

    async create (id_tech, id_esp){

        //verify exist
        const existTech = await technicians_service.getIdTechxid(id_tech)
        const existEsp = await especialties_service.getbyId(id_esp)
        const registered = await this.getAsignation(id_tech, id_esp)

        if(!existEsp || !existTech ){
            return {code : 400, message: "Data no valid"}
        }

        if(registered){
            return {code : 409, message: "user is already registered whit this especialty"}
        }

        const response = await tech_esp_repository.create({
            esp_id: id_esp,
            tech_id:id_tech 
        })

        if(!response){
            return {code : 400, message: "Error to create"}
        }

        return {code : 200, message: response.dataValues.id}
    }

    async getAsignation (id_tech, id_esp){
        const response = tech_esp_repository.getAsignation({esp_id:id_esp, tech_id:id_tech})
        return response
    }

    async getTechnicianEspecialties(id_tech){
        const existTech = await technicians_service.getIdTechxid(id_tech) 
        if(!existTech ){
            return {code : 400, message: "data no valid"}
        }
        const response = await tech_esp_repository.getTechEspecialties({tech_id:id_tech})
        return {code : 200, message: response}
    }
}

export default new Tech_Esp_Service()