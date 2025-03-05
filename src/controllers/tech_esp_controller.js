import tech_esp_service from "../services/tech_esp_service.js";

class TechEspController {
  async create(req, res) {
    try {
      const { id_tech, id_esp } = req.body;
      const response = await tech_esp_service.create(id_tech, id_esp);
      return res.status(response.code).json(response.message);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getTechnicianEspecialties(req, res) {
    try {
        
        const {id} = req.params
    
        const response = await tech_esp_service.getTechnicianEspecialties(id);
        console.log(response.message)
        return res.status(response.code).json(response.message );
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
   

  }
}

export default new TechEspController();
