import express from "express";
import {
  getPembayaran,
  getPembayaranById,
  createPembayaran,
  updatePembayaran,
  deletePembayaran,
  getPembayaranByTagihanId
} from "../controllers/PembayaranController.js";

const router = express.Router();

router.get('/pembayaran', getPembayaran);
router.get('/pembayaran/:id', getPembayaranById);
router.get('/pembayaran/by-tagihan/:id_tagihan', getPembayaranByTagihanId);
router.post('/pembayaran', createPembayaran);
router.patch('/pembayaran/:id', updatePembayaran);
router.delete('/pembayaran/:id', deletePembayaran);

export default router;