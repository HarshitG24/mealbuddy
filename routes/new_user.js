//AUTHOR: MIHIR MESIA

import express from "express";
import db from "../database/dbConnector.js";
const router = express.Router();

router.post("/createUser", async (req, res) => {
  console.log("reached");
  const status = await db.createUser(req?.body || {});
  res.status(status).send();
});

export default router;
