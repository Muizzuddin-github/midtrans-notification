import Notif from "../configurations/db/notif.js";
import mitransNotif from "../configurations/payment/midtrans.js";

class NotifControl {
  static async addNotif(req, res) {
    try {
      const statusResponse = await apiClient.transaction.notification(
        notificationJson
      );

      let orderId = statusResponse.order_id;
      let transactionStatus = statusResponse.transaction_status;
      let fraudStatus = statusResponse.fraud_status;

      const insert = new Notif({
        order_id: orderId,
        name: req.body.name,
        status : transactionStatus,
        responseMidtrans: statusResponse,
      });

      await insert.save();

      res.send("berhasil");
    } catch (err) {
      nextTick;
    }
  }
}

export default NotifControl;
