const express = require("express");
const axios = require("axios").default;
const CryptoJS = require("crypto-js");
const moment = require("moment");

const router = express.Router();

// Cấu hình ZaloPay
const config = {
  app_id: process.env.ZALOPAY_APP_ID || "2553",
  key1: process.env.ZALOPAY_KEY1 || "PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL",
  key2: process.env.ZALOPAY_KEY2 || "kLtgPl8HHhfvMuDHPwKfgfsY4Ydm9eIz",
  endpoint: process.env.ZALOPAY_ENDPOINT || "https://sb-openapi.zalopay.vn/v2/create",
};

// Endpoint tạo đơn hàng và thanh toán
router.post("/payment", async (req, res) => {
  const { app_user, amount, description } = req.body;

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
    return res.status(200).json(result.data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint callback để ZaloPay gọi khi thanh toán thành công
router.post("/callback", (req, res) => {
  let result = {};
  try {
    const dataStr = req.body.data;
    const reqMac = req.body.mac;

    const mac = CryptoJS.HmacSHA256(dataStr, config.key2).toString();

    if (reqMac !== mac) {
      result.return_code = -1;
      result.return_message = "mac not equal";
    } else {
      const dataJson = JSON.parse(dataStr);
      console.log("Update order's status = success where app_trans_id =", dataJson["app_trans_id"]);

      // Thực hiện cập nhật trạng thái đơn hàng trong cơ sở dữ liệu

      result.return_code = 1;
      result.return_message = "success";
    }
  } catch (ex) {
    console.error("Lỗi:", ex.message);
    result.return_code = 0;
    result.return_message = ex.message;
  }

  res.json(result);
});

// Endpoint kiểm tra trạng thái đơn hàng
router.post("/check-status-order", async (req, res) => {
  const { app_trans_id } = req.body;

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
    return res.status(200).json(result.data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;