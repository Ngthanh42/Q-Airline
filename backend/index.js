import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import authRoutes from './Routes/authRoutes.js';
import userRoutes from "./Routes/userRoutes.js";
import uploadRoutes from "./Routes/uploadRoute.js";
import roleRoutes from "./Routes/roleRouters.js";
import airplaneRoutes from "./Routes/airplaneRoutes.js";
import airportRoutes from "./Routes/airportRoutes.js";
import ticketRoutes from "./Routes/ticketRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"], // Địa chỉ frontend và admin
  credentials: true, // Nếu cần cookie hoặc thông tin xác thực
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use('/auth', authRoutes);
app.use("/api", userRoutes);
app.use("/api", uploadRoutes);
app.use("/api", roleRoutes);
app.use("/api", airplaneRoutes);
app.use("/api", airportRoutes);
app.use("/api", ticketRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
