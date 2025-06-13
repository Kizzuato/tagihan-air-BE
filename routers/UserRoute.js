import express from "express";
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  ubahPassword // tambahkan ini!
} from "../controllers/UserController.js";

const router = express.Router();
router.get('/user', getUser);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/login', loginUser);
router.post("/user/ubah-password", ubahPassword);
export default router;