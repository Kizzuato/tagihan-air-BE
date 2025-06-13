import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const Tagihan = db.define('tagihan', {
    id_tagihan: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    status: DataTypes.STRING,
    tagihan: DataTypes.INTEGER,
    id_pakai: {
        type: DataTypes.BIGINT,
        references: {
            model: 'pakai',
            key: 'id_pakai'
        }
    }
}, {
    freezeTableName: true
});

export default Tagihan;

(async () => {
    await db.sync();
})();