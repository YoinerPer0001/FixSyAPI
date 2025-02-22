import Roles from "../models/roles_model.js";


class RolesRepository {

    async getRoleIdxName(name){
        const response =  await Roles.findOne({where: {name: name}})
        return response.dataValues.id
    }
}

export default new RolesRepository();