import Layanan from "../models/LayananModel.js";
import Pelanggan from "../models/PelangganModel.js";

export const getPelanggan = async (req, res) => {
  try {
    const response = await Pelanggan.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPelangganById = async (req, res) => {
  try {
    const response = await Pelanggan.findOne({
      where: { id_pelanggan: req.params.id },
      include: [
        { model: Layanan, attributes: ["id_layanan", "tarif"] },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPelanggan = async (req, res) => {
  try {
    await Pelanggan.create(req.body);
    res.status(201).json({ msg: "pelanggan created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePelanggan = async (req, res) => {
  try {
    await Pelanggan.update(req.body, {
      where: { id_pelanggan: req.params.id },
    });
    res.status(200).json({ msg: "pelanggan updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePelanggan = async (req, res) => {
  try {
    await Pelanggan.destroy({
      where: { id_pelanggan: req.params.id },
    });
    res.status(200).json({ msg: "pelanggan deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
