import express from "express";
import {
  getTagihan,
  getTagihanById,
  createTagihan,
  updateTagihan,
  deleteTagihan
} from "../controllers/TagihanController.js";

const router = express.Router();

router.get('/tagihan', getTagihan);
router.get('/tagihan/:id', getTagihanById);
router.post('/tagihan', createTagihan);
router.patch('/tagihan/:id', updateTagihan);
router.delete('/tagihan/:id', deleteTagihan);

export default router;