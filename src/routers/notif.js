import express from "express";
import NotifControl from "../controllers/notifControl.js";

const notif = express.Router();

notif.post("/notif", NotifControl.addNotif);

export default notif;
