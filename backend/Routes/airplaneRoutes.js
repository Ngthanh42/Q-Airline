import express from "express";
import { createAirplane,
    getAirplanes,
    getAirplaneById
 } from "../controller/airplaneController.js";

const router = express.Router();

// Route để tạo mới máy bay
router.post("/airplanes", createAirplane);
router.get("/airplanes", getAirplanes);
router.get("/airplanes/:id", getAirplaneById);

export default router;
