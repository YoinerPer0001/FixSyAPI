import roles_service from "../services/roles_service.js";
import user_services from "../services/user_services.js";

class UserController {
  async getUserById(req, res) {
    try {
      const id = req.params.id;
      const userInfo = await user_services.getById(id);
      res.status(200).json(userInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
     
      const { email, password, type } = req.body;

      const response = await user_services.login(email.toLowerCase(), password, type);

      if (!response) {
        res.status(404).json({ error: "User o password incorrect" });
      }

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async register(req, res) {
    req.body.type = await roles_service.getIdRolxName(req.body.type)
    const user = req.body;
    
    try {
      const {code, message} = await user_services.register(user);
      res.status(code).json(message);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req,res){
    try {

      const {id} = req.params
      const newData = req.body

      const response = await user_services.update(id, newData)

      return res.status(response.code).json(response.message)
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
