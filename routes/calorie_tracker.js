// AUTHOR: HARSHIT GAJJAR
import express from "express";
import db from "../database/dbConnector.js";
const router = express.Router();

router.get("/getAllOrders/:email", async (req, res) => {
  const resp = await db.fetchAllOrders(req?.params?.email || "");
  res.status(resp.status).json({ data: resp.data });
});

export default router;
