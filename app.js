import express from "express";
import { createServer } from "http";
import loginRouter from "./routes/index.js";
import createUser from "./routes/new_user.js";
import cors from "cors";

const app = express();
const httpServer = createServer(app);

const corsOpts = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"],
  exposedHeaders: ["Content-Type"],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("frontend/build"));
app.use(cors(corsOpts));

app.use("/api", loginRouter);
app.use("/api/createAccount", createUser);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

httpServer.listen(4200);

export default app;
