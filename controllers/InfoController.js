import Info from "../models/InfoModel.js";

export const getInfo = async (req, res) => {
    try {
        const response = await Info.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getInfoById = async (req, res) => {
    try {
        const response = await Info.findOne({
            where: {
                id_info: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createInfo = async (req, res) => {
    try {
        await Info.create(req.body);
        res.status(201).json({ msg: "info created" });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateInfo = async (req, res) => {
    try {
        await Info.update(req.body, {
            where: {
                id_info: req.params.id
            }
        });
        res.status(200).json({ msg: "info updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteInfo = async (req, res) => {
    try {
        await Info.destroy({
            where: {
                id_info: req.params.id
            }
        });
        res.status(200).json({ msg: "info deleted" });
    } catch (error) {
        console.log(error.message);
    }
};