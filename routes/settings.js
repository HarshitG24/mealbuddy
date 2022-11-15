import express from "express";
import db from "../database/dbConnector.js";
const router = express.Router();

router.get("/getUser/:email", async (req, res) => {
  const resp = await db.getUser(req?.params?.email || "");
  res.send({ udata: resp.data });
});

router.post("/updateProfile", async (req, res) => {
  const resp = await db.updateUser(req?.body || {});
  res.send({ status: resp });
});

export default router;
