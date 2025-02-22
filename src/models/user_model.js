import { DataTypes, Model } from "sequelize";
import db from '../config/db.js'
import Roles from "./roles_model.js";

class Users extends Model {}

Users.init({
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue : DataTypes.UUIDV4
    },
    id_number:{
        type: DataTypes.BIGINT,
    },
    name:{
        type: DataTypes.STRING(255),
    },
    email:{
        type: DataTypes.STRING(255),
    },
    phone:{
        type: DataTypes.STRING(20),
    },
    password:{
        type: DataTypes.TEXT,
    },
    address:{
        type: DataTypes.TEXT,
    },

    id_rol :{
        type: DataTypes.UUID
    }
  
}, {sequelize: db, modelName : 'users', timestamps: true})

Roles.hasMany(Users,{foreignKey: "id_rol"})
Users.belongsTo(Roles,{foreignKey: "id_rol", as : 'rol' })

export default Users;