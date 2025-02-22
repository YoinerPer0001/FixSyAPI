import { DataTypes, Model } from "sequelize";
import db from "../config/db.js";

class Roles extends Model {}

Roles.init({
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue : DataTypes.UUIDV4
    },
    name:{
        type: DataTypes.STRING(100),
    },
}, {sequelize: db, modelName: "roles", timestamps: true})


export default Roles;