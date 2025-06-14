import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;

const User = db.define('user',{ // Table name is 'user'
    id_user:{ // Primary key
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming it's auto-incrementing
    },
    level: DataTypes.STRING,
    nama: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
},{
    freezeTableName:true // Prevents Sequelize from pluralizing the table name
});

export default User;

//(async()=>{
    // await db.sync();
// })();