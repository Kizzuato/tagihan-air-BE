import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const Pelanggan = db.define('pelanggan', {
    id_pelanggan: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    alamat: DataTypes.STRING,
    nama_pelanggan: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    status: DataTypes.STRING,
    id_layanan: {
        type: DataTypes.BIGINT,
        references: {
            model: 'layanan',
            key: 'id_layanan'
        }
    },
    id_user: {
        type: DataTypes.BIGINT,
        references: {
            model: 'user',
            key: 'id_user'
        }
    }
}, {
    freezeTableName: true
});

export default Pelanggan;

// (async () => {
    // await db.sync();
// })();