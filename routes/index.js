import express from "express";
import db from "../database/dbConnector.js";
const router = express.Router();

router.post("/createUser", async (req, res) => {
  console.log("req is", req?.body);
  const resp = await db.addUser(req?.body || {});
  //   console.log("resp is", resp);
  //   res.status(resp).send({ code: resp });
});

export default router;
