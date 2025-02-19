import Users from "../models/user_model.js";
import { Op } from "sequelize";

const userAtributes = ['id_number', 'name', 'email', 'phone', 'address' ]

class UserRepository {
    
    async getById(id){
        try {
            return Users.findByPk(id, {attributes:userAtributes})
        } catch (error) {
            throw new Error("Error to get user: ", error);
        }
    }

    async getByIdNumber(id){
        try {
            return Users.findOne({where: {id_number: id}, attributes: userAtributes})
        } catch (error) {
            throw new Error("Error to get user: ", error);
        }
    }

    async getuserRegistered(id_number, email){
        try {
            return Users.findOne({ 
                where:{[Op.or]:[{id_number: id_number}, {email:email}]},
                 attributes: userAtributes})
        } catch (error) {
            throw new Error("Error to get user: ", error);
        }
    }

    async login(email){
        try {
            return Users.findOne({where: {email: email}})
        } catch (error) {
            throw new Error("Error to login: ", error);
        }
    }
 

    async create(user){
        console.log(user)
        try {
            const response = await Users.create(user);
            console.log(response)
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