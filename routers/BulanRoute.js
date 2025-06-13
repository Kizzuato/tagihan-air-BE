import express from "express";
import {
  getBulan,
  getBulanById,
  createBulan,
  updateBulan,
  deleteBulan
} from "../controllers/BulanController.js";

const router = express.Router();

router.get('/bulan', getBulan);
router.get('/bulan/:id', getBulanById);
router.post('/bulan', createBulan);
router.patch('/bulan/:id', updateBulan);
router.delete('/bulan/:id', deleteBulan);

export default router;