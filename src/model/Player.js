import { DataTypes } from "sequelize";
import dbConnection from "../config/db.js";


const Player = dbConnection.define(
    "tbb_players",{
        name:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull:false,
            unique: false
        },
        password:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        nickname:{
            type: DataTypes.STRING(255),
            allowNull: false,
            unique:true
        },
        birhdate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        portrait_img:DataTypes.STRING(255),
    }
)

export default Player