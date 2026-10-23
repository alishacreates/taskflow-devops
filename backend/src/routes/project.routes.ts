import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM projects ORDER BY created_at DESC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch projects:", error);

    res.status(500).json({
      message: "Failed to fetch projects",
    });
  }
});

router.post("/", async (req, res) => {
  const { name, description } = req.body;

  if (!name?.trim()) {
    return res.status(400).json({
      message: "Project name is required",
    });
  }

  try {
    const result = await pool.query(
      `
      INSERT INTO projects (name, description)
      VALUES ($1, $2)
      RETURNING *
      `,
      [name.trim(), description ?? null]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Failed to create project:", error);

    res.status(500).json({
      message: "Failed to create project",
    });
  }
});

export default router;