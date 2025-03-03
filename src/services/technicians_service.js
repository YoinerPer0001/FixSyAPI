import TechniciansRepository from "../repository/technician_repository.js";


class Technicians_service {

    async register(tech){

        const registered = await TechniciansRepository.getByIdNumber(tech.user_id)

        if(registered){
            return {code: 409, message: "Tech is already registered"}
        }

        const register = await TechniciansRepository.create(tech)

        return {code: 201, data: register}
    }

    async getIdTechxid(id){

        const response = await TechniciansRepository.getById(id)

        if(!response){
            throw new Error("Error: Tech not registred");
        }
        return response;
    }


    async update(id, newData){
         //we verify tech exist
        const registred = await this.getIdTechxid(id)
        
        if(!registred){
            return {code: 500, message: "Tech is not registered"}
        }
        console.log(newData)
        const response = await TechniciansRepository.update(id, newData)

        return {code: 201, data: response}
    }
}

export default new Technicians_service;