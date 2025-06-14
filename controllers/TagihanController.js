import Tagihan from "../models/TagihanModel.js";
import Pakai from "../models/PakaiModel.js";
import Pelanggan from "../models/PelangganModel.js";
import Bulan from "../models/BulanModel.js";
import Layanan from "../models/LayananModel.js";

// GET semua tagihan beserta relasi Pakai, Pelanggan, Bulan
export const getTagihan = async (req, res) => {
  try {
    const response = await Tagihan.findAll({
      include: [
        {
          model: Pakai,
          include: [
            {
              model: Pelanggan,
              attributes: ["id_pelanggan", "nama_pelanggan"],
              include: [
                {
                  model: Layanan,
                  attributes: ["id_layanan", "nama_layanan", "tarif"],
                },
              ],
            },
            {
              model: Bulan,
              attributes: ["id_bulan", "nama_bulan"],
            },
          ],
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    console.error("Error getTagihan:", error);
    res
      .status(500)
      .json({ message: "Gagal mengambil data tagihan", error: error.message });
  }
};

// GET tagihan by id
export const getTagihanById = async (req, res) => {
  try {
    const response = await Tagihan.findOne({
      where: { id_tagihan: req.params.id },
      include: [
        {
          model: Pakai,
          include: [
            {
              model: Pelanggan,
              attributes: ["id_pelanggan", "nama_pelanggan"],
              include: [
                {
                  model: Layanan,
                  attributes: ["id_layanan", "nama_layanan", "tarif"],
                },
              ],
            },
            {
              model: Bulan,
              attributes: ["id_bulan", "nama_bulan"],
            },
          ],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE tagihan (biasanya otomatis dari createPakai, tapi tetap disediakan)
export const createTagihan = async (req, res) => {
  try {
    await Tagihan.create(req.body);
    res.status(201).json({ msg: "tagihan created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE tagihan
export const updateTagihan = async (req, res) => {
  try {
    await Tagihan.update(req.body, {
      where: { id_tagihan: req.params.id },
    });
    res.status(200).json({ msg: "tagihan updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE tagihan
export const deleteTagihan = async (req, res) => {
  try {
    await Tagihan.destroy({
      where: { id_tagihan: req.params.id },
    });
    res.status(200).json({ msg: "tagihan deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
