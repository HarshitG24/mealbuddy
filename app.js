import express from "express";
import { createServer } from "http";
import loginRouter from "./routes/index.js";
import createUser from "./routes/new_user.js";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("frontend/build"));

app.use("/api", loginRouter);
app.use("/api/createAccount", createUser);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// app.use((req, res) => {
//   res.sendFile("./frontend/public/index.html");
// });

httpServer.listen(8000);

export default app;
