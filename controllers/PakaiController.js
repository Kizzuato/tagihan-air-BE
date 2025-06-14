import Pakai from "../models/PakaiModel.js";
import Pelanggan from "../models/PelangganModel.js";
import Bulan from "../models/BulanModel.js";
import Tagihan from "../models/TagihanModel.js";
import Layanan from "../models/LayananModel.js";

// GET semua data pakai beserta relasi Pelanggan & Bulan
export const getPakai = async (req, res) => {
  try {
    const response = await Pakai.findAll({
      include: [
        { model: Pelanggan, attributes: ['nama_pelanggan'] },
        { model: Bulan, attributes: ['nama_bulan'] }
      ]
    });
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET pakai by id beserta relasi Pelanggan & Bulan
export const getPakaiById = async (req, res) => {
  try {
    const response = await Pakai.findOne({
      where: { id_pakai: req.params.id },
      include: [
        { model: Pelanggan, attributes: ['nama_pelanggan'] },
        { model: Bulan, attributes: ['nama_bulan'] }
      ]
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE pakai & otomatis buat tagihan
export const createPakai = async (req, res) => {
  try {
    const dataPakai = await Pakai.create(req.body);
    const pelanggan = await Pelanggan.findByPk(req.body.id_pelanggan);
    const harga = pelanggan?.Layanan?.harga || 0;
    const jumlahTagihan = (req.body.akhir - req.body.awal) * harga;
    await Tagihan.create({
      id_pakai: dataPakai.id_pakai,
      tagihan: jumlahTagihan,
      status: "belum bayar"
    });
    res.status(201).json({ msg: "Pemakaian & Tagihan created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE pakai
export const updatePakai = async (req, res) => {
  try {
    await Pakai.update(req.body, {
      where: { id_pakai: req.params.id }
    });
    res.status(200).json({ msg: "pakai updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE pakai
export const deletePakai = async (req, res) => {
  try {
    await Pakai.destroy({
      where: { id_pakai: req.params.id }
    });
    res.status(200).json({ msg: "pakai deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET pakai terakhir berdasarkan pelanggan, bulan, tahun
export const getLastPakai = async (req, res) => {
  const { pelanggan, bulan, tahun } = req.query;
  try {
    const result = await Pakai.findOne({
      where: {
        id_pelanggan: Number(pelanggan),
        id_bulan: Number(bulan),
        tahun: Number(tahun)
      },
      order: [['id_pakai', 'DESC']]
    });
    if (result) {
      res.json({ akhir: result.akhir });
    } else {
      res.json({});
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};