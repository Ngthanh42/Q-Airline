import express from 'express';
import { register, login } from '../controller/authController.js';
import { getUserRole } from '../data/getUserMeLoader.js'

const router = express.Router();

// Đăng ký
router.post('/register', register);

// Đăng nhập
router.post('/login', login);

// Lấy vai trò người dùng
router.get('/role/:userId', getUserRole);

export default router;
