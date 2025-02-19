//Bussinnes's Logic

import UserRepository from "../repository/user_repository.js";
import { hashPassword, comparePassword } from "../utils/PasswordsManager.js";

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
      user.email
    );
    
    if (registered) {
      throw new Error("User or Email is already registered");
    }
    const encPass = await hashPassword(user.password);

    const newUser = {
      name: user.name,
      email: user.email,
      id_number: user.id_number,
      phone: user.phone,
      password: encPass,
      address: user.address,
    };
    const response = UserRepository.create(newUser);
    return response;
  }

  async login(email, password) {
    const dataUser = await UserRepository.login(email);
    if (!dataUser) {
    }
    //pass encript
    const isMatch = await comparePassword(
      dataUser.dataValues.password,
      password
    );

    if (isMatch) {
      const objUser = {
        id_number: dataUser.dataValues.id_number,
        name: dataUser.dataValues.name,
        email: dataUser.dataValues.email,
        phone: dataUser.dataValues.phone,
        address: dataUser.dataValues.adress,
      };
      return objUser;
    } else {
      throw new Error("User or password incorrect");
    }
  }

  async update(id, newdata) {
    const updated = UserRepository.update(id, newdata);
    return updated;
  }
}

export default new UserService();
