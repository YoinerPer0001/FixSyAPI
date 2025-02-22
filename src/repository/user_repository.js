import Roles from "../models/roles_model.js";
import Users from "../models/user_model.js";
import { Op } from "sequelize";

const userAtributes = ['id_number', 'name', 'email', 'phone', 'address' ]
const rolesAtributes = ['id', 'name']

class UserRepository {
    
    async getById(id){
        try {
            return Users.findByPk(id, {attributes:userAtributes, include: {model: Roles, as: "rol", attributes: rolesAtributes}})
        } catch (error) {
            throw new Error("Error to get user: ", error);
        }
    }

    async getByIdNumber(id){
        try {
            return Users.findOne({where: {id_number: id}, attributes: userAtributes,  include: {model: Roles, as: "rol", attributes: rolesAtributes}})
        } catch (error) {
            throw new Error("Error to get user: ", error);
        }
    }

    async getuserRegistered(id_number, id_rol){
        try {
            console.log(id_number, id_rol)
            const oneStepVerification = await Users.findOne({where : {[Op.and]: [{id_number: id_number}, {id_rol: id_rol}]}, attributes: userAtributes})

            return oneStepVerification;
                
        } catch (error) {
            throw new Error("Error to get user: ", error);
        }
    }

    async login(email, rol){
        try {
            return Users.findOne({where: {[Op.and]: [{email: email}, {id_rol: rol}]}})
        } catch (error) {
            throw new Error("Error to login: ", error);
        }
    }
 

    async create(user){
    
        try {
            const response = await Users.create(user);
            return response.dataValues.id;
        } catch (error) {
            throw new Error("Error to create: ", error);
        }
    }

    async update(id, newData){
        
        try {
            const user = await Users.findOne({where: {id_number: id}})
            await user.update(newData);
            return user;

        } catch (error) {
            throw new Error("Error to update: ", error);
        }
        
    }
}

export default new UserRepository();