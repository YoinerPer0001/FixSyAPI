import technicians_service from "../services/technicians_service.js";

class TechController {
  async update(req, res) {
    try {
      const { id } = req.params;
      const updated = await technicians_service.update(id, req.body);

      res.status(updated.code).json(updated.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new TechController();
