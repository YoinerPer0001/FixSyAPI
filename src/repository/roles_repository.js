import Roles from "../models/roles_model.js";


class RolesRepository {

    async getRoleIdxName(name){
        const response =  await Roles.findOne({where: {name: name}})
        return response.dataValues.id
    }

    async getRolexID(id){
        const response =  await Roles.findByPk(id)
        return response
    }
}

export default new RolesRepository();