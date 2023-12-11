import Notif from "../configurations/db/notif.js";
import mitransNotif from "../configurations/payment/midtrans.js";

class NotifControl {
  static async addNotif(req, res) {
    try {
      const statusResponse = await mitransNotif.transaction.notification(
        req.body
      );

      let orderId = statusResponse.order_id;
      let transactionStatus = statusResponse.transaction_status;
      let fraudStatus = statusResponse.fraud_status;

      const insert = Notif.updateOne(
        {
          order_id: orderId,
        },
        {
          status: transactionStatus,
          responseMidtrans: JSON.stringify(statusResponse),
        }
      );

      await insert.save();

      res.send("berhasil");
    } catch (err) {
      nextTick;
    }
  }
}

export default NotifControl;
