import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pelanggan from "./PelangganModel.js";
import Bulan from "./BulanModel.js";

const { DataTypes } = Sequelize;

const Pakai = db.define('pakai', {
    id_pakai: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    akhir: DataTypes.INTEGER,
    awal: DataTypes.INTEGER,
    pakai: DataTypes.INTEGER,
    tahun: DataTypes.INTEGER,
    id_bulan: {
        type: DataTypes.BIGINT,
        references: {
            model: 'bulan',
            key: 'id_bulan'
        }
    },
    id_pelanggan: {
        type: DataTypes.BIGINT,
        references: {
            model: 'pelanggan',
            key: 'id_pelanggan'
        }
    }
}, {
    freezeTableName: true
});

// Tambahkan relasi agar include di controller bisa berjalan
Pakai.belongsTo(Pelanggan, { foreignKey: 'id_pelanggan' });
Pakai.belongsTo(Bulan, { foreignKey: 'id_bulan' });

export default Pakai;

// (async () => {
    // await db.sync();
// })();