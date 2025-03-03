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
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phone:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    password:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    address:{
        type: DataTypes.TEXT,
        allowNull: false,
    },

    id_rol :{
        type: DataTypes.UUID,
        allowNull: false,
    },
    id_num_type: {
        type : DataTypes.ENUM("TI", "CC", "CE"),
        allowNull: false,
    },
    perfil_photo:{
        type: DataTypes.TEXT,
        allowNull: true
    }
  
}, {sequelize: db, modelName : 'users', timestamps: true})

Roles.hasMany(Users,{foreignKey: "id_rol"})
Users.belongsTo(Roles,{foreignKey: "id_rol", as : 'rol' })

export default Users;