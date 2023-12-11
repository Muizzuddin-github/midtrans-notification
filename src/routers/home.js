import express from "express";
import HomeControl from "../controllers/homeControl.js";

const home = express.Router();

home.get("/", HomeControl.say);

export default home;
