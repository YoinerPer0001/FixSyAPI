import roles_repository from "../repository/roles_repository.js";


class RolesService {

    async getIdRolxName(name){

        const response = await roles_repository.getRoleIdxName(name)

        if(!response){
            throw new Error("Error: Rol not valid");
            
        }
        return response;
    }
}

export default new RolesService();