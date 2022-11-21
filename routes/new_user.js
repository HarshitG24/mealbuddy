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
  if (status.code == 200) {
    req.session.user = status.data[0].email;
    req.session.save();
  }
  console.log(status.code);
  res.status(status.code).send();
});

//get_session_user
router.get("/getUser", (req, res) => {
  res.json({ user: req.session.user });
});

export default router;
