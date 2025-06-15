import express from "express";
import {
  getPakai,
  getPakaiById,
  createPakai,
  updatePakai,
  deletePakai,
  getLastPakai
} from "../controllers/PakaiController.js";

const router = express.Router();

router.get('/pakai', getPakai);
router.post('/pakai', createPakai);
router.get('/pakai/last', getLastPakai); // <-- Tambahkan ini
router.get('/pakai/:id', getPakaiById);
router.patch('/pakai/:id', updatePakai);
router.delete('/pakai/:id', deletePakai);

export default router;