import express from "express";
import { uploadImage } from "../controller/uploadController.js";

const router = express.Router();

// Endpoint để tải lên hình ảnh
router.post("/upload", uploadImage);

export default router;
