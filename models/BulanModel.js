import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;

const Bulan = db.define('bulan',{ // Table name is 'bulan'
    id_bulan:{ // Primary key
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming it's auto-incrementing
    },
    nama_bulan: DataTypes.STRING
},{
    freezeTableName:true
});

export default Bulan;

(async()=>{
    await db.sync();
})();