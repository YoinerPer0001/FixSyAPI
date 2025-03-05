//Bussinnes's Logic

import UserRepository from "../repository/user_repository.js";
import { hashPassword, comparePassword } from "../utils/PasswordsManager.js";
import roles_service from "./roles_service.js";
import technicians_service from "./technicians_service.js";

class UserService {
  async getById(id) {
    const user = UserRepository.getById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async getByIdNumber(id) {
    const user = UserRepository.getByIdNumber(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async register(user) {
    // user verification
    const registered = await UserRepository.getuserRegistered(
      user.id_number,
      user.type
    );

    if (registered) {
      return { code: 409, message: "User or email registered" };
    }
    const encPass = await hashPassword(user.password);

    const newUser = {
      name: user.name.toLowerCase(),
      email: user.email.toLowerCase(),
      id_number: user.id_number,
      phone: user.phone,
      password: encPass,
      address: user.address,
      id_num_type: user.id_num_type,
      id_rol: user.type,
    };

    let response = await UserRepository.create(newUser);

    const rolTecnicId = await roles_service.getIdRolxid(user.type);

    if (response && rolTecnicId.dataValues.name === "tecnic") {
      console.log("entro");
      //registramos en la tabla de tecnicos
      const tech = {
        user_id: response,
      };
      const tech_register = await technicians_service.register(tech);
      if (!tech_register) {
        return { code: 500, message: "Server error" };
      }
      response = tech_register.data;
    }
    return { code: 201, message: response };
  }

  async login(email, password, type) {
    const typeId = await roles_service.getIdRolxName(type);

    if (typeId) {
      const dataUser = await UserRepository.login(email, typeId);

      if (!dataUser) {
        throw new Error("User or password incorrect");
      }

      //pass encript
      const isMatch = await comparePassword(
        dataUser.dataValues.password,
        password
      );

      if (isMatch) {
        let objUser = {
          id: dataUser.id,
          id_tech: dataUser.dataValues.techInfo
            ? dataUser.dataValues.techInfo.id
            : null,
          id_number: dataUser.dataValues.id_number,
          name: dataUser.dataValues.name,
          email: dataUser.dataValues.email,
          phone: dataUser.dataValues.phone,
          address: dataUser.dataValues.adress,
          perfil_photo: dataUser.dataValues.perfil_photo,
          experience: dataUser.dataValues.techInfo
            ? dataUser.dataValues.techInfo.experience || null
            : null,
          certificates: dataUser.dataValues.techInfo
            ? dataUser.dataValues.techInfo.certificates || null
            : null,
          qualification: dataUser.dataValues.techInfo
            ? dataUser.dataValues.techInfo.qualification || null
            : null,
          state: dataUser.dataValues.techInfo
            ? dataUser.dataValues.techInfo.state || null
            : null,
        };

        return objUser;
      } else {
        throw new Error("User or password incorrect");
      }
    } else {
      throw new Error("Type is not valid");
    }
  }

  async update(id, newdata) {

    const registered = this.getById(id)

    if (!registered) {
      return { code: 404, message: "Tech is not registered" };
    }
    const updated =  await UserRepository.update(id, newdata);

    if(!updated){
      return { code: 500, message: "Error to update" };
    }
    return { code: 200, message: updated };
  }
}

export default new UserService();
