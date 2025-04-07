// server/app.js
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://10.0.2.2:8081", // Expo dev server (React Native)
  credentials: true,
}));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Test route to verify backend works
app.get("/rajan", (req, res) => {
  console.log("✅ /rajan route hit");
  res.json({ message: "HI" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  connectDB();
});   
