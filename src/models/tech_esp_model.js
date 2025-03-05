import { Model, DataTypes, UUIDV4 } from "sequelize";
import db from "../config/db.js";
import Especialties from "./especialties_model.js";
import Technicians from "./technicians_model.js";


class Tech_especialties extends Model {}

Tech_especialties.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    esp_id:  {
        type: DataTypes.UUID,
        allowNull: false
    },
    tech_id:  {
        type: DataTypes.UUID,
        allowNull: false
    }
} , {sequelize: db, modelName: "tech_especialties"})

Especialties.hasMany(Tech_especialties, {foreignKey: "esp_id", as: "esp_info"})
Tech_especialties.belongsTo(Especialties, {foreignKey: "esp_id", as: "esp_info"})

Technicians.hasMany(Tech_especialties, {foreignKey: "tech_id", as: "tec_info"})
Tech_especialties.belongsTo(Technicians, {foreignKey: "tech_id", as: "tec_info"})

export default Tech_especialties;