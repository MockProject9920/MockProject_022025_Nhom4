const axios = require("axios").default;
const CryptoJS = require("crypto-js");
const moment = require("moment");

const config = {
  app_id: process.env.ZALOPAY_APP_ID || "2553",
  key1: process.env.ZALOPAY_KEY1 || "PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL",
  key2: process.env.ZALOPAY_KEY2 || "kLtgPl8HHhfvMuDHPwKfgfsY4Ydm9eIz",
  endpoint: process.env.ZALOPAY_ENDPOINT || "https://sb-openapi.zalopay.vn/v2/create",
};

class PaymentZaloService {
  // Tạo đơn hàng và thanh toán
  static async createPayment(app_user, amount, description) {
    const embed_data = {
      redirecturl: "https://your-ngrok-url.ngrok-free.app/zalopay/return",
    };

    const items = [];
    const transID = Math.floor(Math.random() * 1000000);

    const order = {
      app_id: config.app_id,
      app_trans_id: `${moment().format("YYMMDD")}_${transID}`,
      app_user,
      app_time: Date.now(),
      item: JSON.stringify(items),
      embed_data: JSON.stringify(embed_data),
      amount,
      callback_url: "https://your-ngrok-url.ngrok-free.app/zalopay/callback",
      description,
      bank_code: "",
      return_url: "https://your-ngrok-url.ngrok-free.app/zalopay/return",
    };

    const data = `${config.app_id}|${order.app_trans_id}|${order.app_user}|${order.amount}|${order.app_time}|${order.embed_data}|${order.item}`;
    order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

    try {
      const result = await axios.post(config.endpoint, null, { params: order });
      return result.data;
    } catch (error) {
      console.error("Error creating payment:", error.response ? error.response.data : error.message);
      throw new Error("Failed to create payment");
    }
  }

  // Xử lý callback từ ZaloPay
  static async handleCallback(data, reqMac) {
    const mac = CryptoJS.HmacSHA256(data, config.key2).toString();

    if (reqMac !== mac) {
      return { return_code: -1, return_message: "mac not equal" };
    }

    const dataJson = JSON.parse(data);
    console.log("Update order's status = success where app_trans_id =", dataJson["app_trans_id"]);

    // Thực hiện cập nhật trạng thái đơn hàng trong cơ sở dữ liệu

    return { return_code: 1, return_message: "success" };
  }

  // Kiểm tra trạng thái đơn hàng
  static async checkOrderStatus(app_trans_id) {
    const postData = {
      app_id: config.app_id,
      app_trans_id,
    };

    const data = `${postData.app_id}|${postData.app_trans_id}|${config.key1}`;
    postData.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

    try {
      const result = await axios.post("https://sb-openapi.zalopay.vn/v2/query", null, {
        params: postData,
      });
      return result.data;
    } catch (error) {
      console.error("Error checking order status:", error.response ? error.response.data : error.message);
      throw new Error("Failed to check order status");
    }
  }
}

module.exports = PaymentZaloService;
