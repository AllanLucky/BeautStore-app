import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./Middleware/error.middleware.js";
import authRoutes from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";

const app = express();

// ========================
// MIDDLEWARE
// ========================

// Parse JSON body
app.use(express.json());

// Enable CORS
app.use(cors());

// Parse cookies
app.use(cookieParser());

// ========================
// ROUTES
// ========================
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoute);

// ========================
// ERROR HANDLING MIDDLEWARE
// ========================
app.use(notFound);
app.use(errorHandler);

export default app;
