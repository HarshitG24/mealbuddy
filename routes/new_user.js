//AUTHOR: MIHIR MESIA

import express from "express";
import db from "../database/dbConnector.js";
const router = express.Router();

router.post("/createUser", async (req, res) => {
  const status = await db.createUser(req?.body || {});
  res.status(status).send();
});

//login

router.post("/login", async (req, res) => {
  const status = await db.login(req?.body || {});
  res.status(status.code).send();
});

export default router;
