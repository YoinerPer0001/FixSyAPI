import especialties_repository from "../repository/especialties_repository.js";


class EspecialtiesService{

    async getAll(){
        const response = await especialties_repository.getAll();
        return {code: 200, message: response}
    }

    async getbyId(id){
        const response = await especialties_repository.getbyId(id);
        return response
    }
}

export default new EspecialtiesService()