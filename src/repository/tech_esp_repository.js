import Especialties from "../models/especialties_model.js";
import Tech_especialties from "../models/tech_esp_model.js";
import Technicians from "../models/technicians_model.js";

class Tech_Esp_Repository {
  async create(data) {
    const response = await Tech_especialties.create(data);
    return response;
  }

  async getAsignation(data) {
    const response = await Tech_especialties.findOne({ where: data });
    return response;
  }

  async getTechEspecialties(data) {
    const response = await Tech_especialties.findAll({
      where: data,
      attributes: {exclude: ["createdAt", "updatedAt", "esp_id", "tech_id"]},
      include: [
        { model: Technicians, as: "tec_info", attributes: {exclude: ["createdAt", "updatedAt"]}},
        { model: Especialties, as: "esp_info" , attributes: {exclude: ["createdAt", "updatedAt"]}},
      ],
    });
    return response;
  }
}

export default new Tech_Esp_Repository();
