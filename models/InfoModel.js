import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;

const Info = db.define('info',{ // Table name is 'info'
    id_info:{ // Primary key
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming it's auto-incrementing
    },
    isi_info: DataTypes.STRING
},{
    freezeTableName:true
});

export default Info;

(async()=>{
    await db.sync();
})();