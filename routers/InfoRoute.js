import express from "express";
import {
  getInfo,
  getInfoById,
  createInfo,
  updateInfo,
  deleteInfo
} from "../controllers/InfoController.js";

const router = express.Router();

router.get('/info', getInfo);
router.get('/info/:id', getInfoById);
router.post('/info', createInfo);
router.patch('/info/:id', updateInfo);
router.delete('/info/:id', deleteInfo);

export default router;