import Pakai from "./PakaiModel.js";
import Tagihan from "./TagihanModel.js";
import Pelanggan from "./PelangganModel.js";
import Bulan from "./BulanModel.js";

// Relasi Pakai
Pakai.belongsTo(Pelanggan, { foreignKey: 'id_pelanggan' });
Pakai.belongsTo(Bulan, { foreignKey: 'id_bulan' });
Pakai.hasOne(Tagihan, { foreignKey: 'id_pakai' });

// Relasi Tagihan
Tagihan.belongsTo(Pakai, { foreignKey: 'id_pakai' });

export {};