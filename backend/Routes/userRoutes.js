import express from "express";
import { getUsers, getUserById, updateUser } from "../controller/userController.js";

const router = express.Router();

// Route: Lấy danh sách người dùng
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);

export default router;
