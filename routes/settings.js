import express from "express";
import db from "../database/dbConnector.js";
const router = express.Router();

router.get("/getUser/:email", async (req, res) => {
  const resp = await db.getUser(req?.params?.email || "");
  res.send({ udata: resp.data });
});

export default router;
