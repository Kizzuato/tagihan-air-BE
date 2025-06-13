import User from "../models/UserModel.js";

export const getUser = async(req, res) =>{ // Diubah dari getUsers menjadi getUser
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id_user: req.params.id // Menggunakan 'id_user' sesuai model User
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "user created"});
    } catch (error){
        console.log(error.message);
    }
}

export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id_user: req.params.id // Menggunakan 'id_user' sesuai model User
            }
        });
        res.status(200).json({msg: "user updated"});
    } catch (error){
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id_user: req.params.id // Menggunakan 'id_user' sesuai model User
            }
        });
        res.status(200).json({msg: "user deleted"});
    } catch (error){
        console.log(error.message);
    }
}

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            where: { username, password }
        });
        if (!user) {
            return res.status(401).json({ message: "Username atau password salah" });
        }
        res.status(200).json({
            id: user.id_user,
            username: user.username,
            level: user.level
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server error" });
    }
};

export const ubahPassword = async (req, res) => {
    try {
        const { username, old_password, new_password } = req.body;
        // Cari user dengan username dan password lama
        const user = await User.findOne({
            where: { username, password: old_password }
        });
        if (!user) {
            return res.status(400).json({ message: "Username atau password lama salah" });
        }
        // Update password
        await User.update(
            { password: new_password },
            { where: { id_user: user.id_user } }
        );
        res.json({ message: "Password berhasil diubah" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server error" });
    }
};