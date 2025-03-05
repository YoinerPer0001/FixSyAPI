import { Model, DataTypes, UUIDV4 } from "sequelize";
import db from "../config/db.js";

class Especialties extends Model {}

Especialties.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize: db, modelName: "especialties"})

export default Especialties;