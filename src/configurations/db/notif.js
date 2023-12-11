import mongoose from "mongoose";

const schemaNotif = mongoose.Schema({
  order_id: String,
  name: String,
  status: String,
  responseMidtrans: String,
});

const Notif = mongoose.model("notif", schemaNotif, "notif");

export default Notif;
