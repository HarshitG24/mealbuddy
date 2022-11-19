import express from "express";
import db from "../database/dbConnector.js";
const router = express.Router();

router.get("/getAllData", async (req, res) => {
  const resp = await db.getData();
  res.status(resp.status).json(resp.data);
});

export default router;
