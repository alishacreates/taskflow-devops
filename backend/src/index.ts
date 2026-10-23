import "dotenv/config";

import express from "express";
import cors from "cors";
import { pool } from "./config/db.js";
import projectRoutes from "./routes/project.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "taskflow-api",
  });
});

app.get("/health/db", async (_req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.status(200).json({
      status: "ok",
      database: "connected",
      timestamp: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      status: "error",
      database: "disconnected",
    });
  }
});

app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`TaskFlow API running on port ${PORT}`);
});