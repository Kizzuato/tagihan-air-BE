import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const {DataTypes} = Sequelize;

const Layanan = db.define('layanan',{ // Table name is 'layanan'
    id_layanan:{ // Primary key
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming it's auto-incrementing
    },
    nama_layanan: DataTypes.STRING,
    tarif: DataTypes.INTEGER
},{
    freezeTableName:true
});

export default Layanan;

(async()=>{
    await db.sync();
})();