import express from "express";
import handleError from "./middlewares/handleError.js";
import mongoose from "mongoose";
import notif from "./routers/notif.js";
import dotenv from "dotenv";
dotenv.config();

// connection
mongoose.connect(process.env.DB);

const con = mongoose.connection;
con.on("err", (err) => console.log(err));
con.once("open", () => console.log("database terhubung"));

const app = express();
app.use(express.json());

app.use(notif);
app.use(handleError);
export default app;
