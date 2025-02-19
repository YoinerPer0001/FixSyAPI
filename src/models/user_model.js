import { DataTypes, Model } from "sequelize";
import db from '../config/db.js'

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
  
}, {sequelize: db, modelName : 'users', timestamps: true})

export default Users;