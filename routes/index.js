import express from "express";
import db from "../database/dbConnector.js";
const router = express.Router();

// AUTHOR: HARSHIT GAJJAR
router.post("/createUser", async (req, res) => {
  console.log("reached");
  console.log("req is", req?.body);
  const resp = await db.addUser(req?.body || {});
  res.status(resp).send({ code: resp });
});

//AUTHOR: MIHIR MESIA

router.post("/send_wishlist_data", async (req, res) => {
  const resp = await db.send_wishlist(req?.body || {});
  res.status(resp).send();
});

//AUTHOR: MIHIR MESIA

router.get("/fetch_wishlist_data/:user", async (req, res) => {
  const resp = await db.fetch_wishlist(req?.params?.user || "");
  res.send(JSON.stringify(resp));
});

export default router;
