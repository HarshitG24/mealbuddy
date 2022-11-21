import express from "express";
import { createServer } from "http";
import loginRouter from "./routes/index.js";
import createUser from "./routes/new_user.js";
import checkout from "./routes/add_to_cart.js";
import userRouter from "./routes/settings.js";
import calorieRouter from "./routes/calorie_tracker.js";
import dataRouter from "./routes/home.js";
import PizzaRouter from "./routes/pizzabuilder.js";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";

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
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "secret",
    cookie: {},
  })
);
app.use(express.static("frontend/build"));
app.use(cors(corsOpts));

app.use("/api", loginRouter);
app.use("/api/Account", createUser);
app.use("/api/cart", checkout);
app.use("/api/user", userRouter);
app.use("/api/calorie", calorieRouter);
app.use("/api/home", dataRouter);
app.use("/api/pizza", PizzaRouter);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

httpServer.listen(process.env.DEP_LINK || 4200);

export default app;
