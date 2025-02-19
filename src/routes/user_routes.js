import express from "express";
import { idVerification } from "../validators/general/id_verification.js";
import UserController from "../controllers/user_controller.js";
import { loginValidator , UserDataValidator} from "../validators/user_validators.js";

const UserRouter = express.Router();

UserRouter.get("/user/:id",idVerification, UserController.getUserById);

UserRouter.post("/login",loginValidator,  UserController.login);

UserRouter.post("/register", UserDataValidator, UserController.register);

export default UserRouter