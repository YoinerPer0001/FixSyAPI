import { DataTypes, Model, UUIDV4 } from "sequelize";
import db from "../config/db.js";
import Users from "./user_model.js";

class Technicians extends Model {}

Technicians.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4
    },
    user_id : {
        type: DataTypes.UUID,
        allowNull: false
    },
    experience: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    certificates: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    qualification: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        defaultValue : "pending"
    }
}, {sequelize: db, modelName: "technicians"})

Users.hasOne(Technicians, {foreignKey: "user_id", as: "techInfo"})
Technicians.belongsTo(Users, {foreignKey: "user_id", as : "basicInfo"})

export default Technicians;