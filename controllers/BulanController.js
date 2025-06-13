import Bulan from "../models/BulanModel.js";

export const getBulan = async (req, res) => {
    try {
        const response = await Bulan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getBulanById = async (req, res) => {
    try {
        const response = await Bulan.findOne({
            where: {
                id_bulan: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createBulan = async (req, res) => {
    try {
        await Bulan.create(req.body);
        res.status(201).json({ msg: "bulan created" });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateBulan = async (req, res) => {
    try {
        await Bulan.update(req.body, {
            where: {
                id_bulan: req.params.id
            }
        });
        res.status(200).json({ msg: "bulan updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteBulan = async (req, res) => {
    try {
        await Bulan.destroy({
            where: {
                id_bulan: req.params.id
            }
        });
        res.status(200).json({ msg: "bulan deleted" });
    } catch (error) {
        console.log(error.message);
    }
};