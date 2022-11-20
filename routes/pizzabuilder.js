// AUTHOR: HARSHIT GAJJAR
import express from "express";
import db from "../database/dbConnector.js";
const router = express.Router();

router.get("/getPizzaData", async (req, res) => {
  const resp = await db.getPizzaData();
  res.status(resp.status).json(resp.data);
});

export default router;
