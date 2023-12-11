import midtransClient from "midtrans-client";

const mitransNotif = new midtransClient.Snap({
  isProduction: false,
  clientKey: process.env.SECRET_CLIENT_KEY,
  serverKey: process.env.SECRET_SERVER_KEY,
});

export default mitransNotif;
