import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// connection
mongoose.connect(process.env.DB);

// middleware
import handleError from "./middlewares/handleError.js";

// router
import notif from "./routers/notif.js";
import home from "./routers/home.js";

const con = mongoose.connection;
con.on("err", (err) => console.log(err));
con.once("open", () => console.log("database terhubung"));

const app = express();
app.use(cors());
app.use(express.json());

app.use(notif);
app.use(home);
app.use(handleError);
export default app;
