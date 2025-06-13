import express from "express";
import {
  getLayanan,
  getLayananById,
  createLayanan,
  updateLayanan,
  deleteLayanan
} from "../controllers/LayananController.js";

const router = express.Router();

router.get('/layanan', getLayanan);
router.get('/layanan/:id', getLayananById);
router.post('/layanan', createLayanan);
router.patch('/layanan/:id', updateLayanan);
router.delete('/layanan/:id', deleteLayanan);

export default router;