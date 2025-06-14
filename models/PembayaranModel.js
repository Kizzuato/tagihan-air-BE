import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Tagihan from "./TagihanModel.js";
const { DataTypes } = Sequelize;

const Pembayaran = db.define('pembayaran', {
    id_pembayaran: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    tgl_bayar: DataTypes.DATE,
    uang_bayar: DataTypes.DOUBLE,
    uang_kembalian: DataTypes.DOUBLE,
    id_tagihan: {
        type: DataTypes.BIGINT,
        references: {
            model: 'tagihan',
            key: 'id_tagihan'
        }
    }
}, {
    freezeTableName: true
});

Pembayaran.belongsTo(Tagihan, { foreignKey: 'id_tagihan' });
export default Pembayaran;

// (async () => {
    // await db.sync();
// })();