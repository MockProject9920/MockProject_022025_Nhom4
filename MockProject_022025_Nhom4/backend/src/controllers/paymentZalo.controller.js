const paymentZaloService = require("../services/paymentZalo.service");

class PaymentZaloController {
  // Tạo đơn hàng và thanh toán
  static async createPayment(req, res) {
    try {
      const { app_user, amount, description } = req.body;
      const result = await paymentZaloService.createPayment(app_user, amount, description);
      return res.status(200).json(result);
    } catch (error) {
      console.error("Error creating payment:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Callback từ ZaloPay
  static async handleCallback(req, res) {
    try {
      const { data, mac } = req.body;
      const result = await paymentZaloService.handleCallback(data, mac);
      return res.json(result);
    } catch (error) {
      console.error("Error handling callback:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Kiểm tra trạng thái đơn hàng
  static async checkOrderStatus(req, res) {
    try {
      const { app_trans_id } = req.body;
      const result = await paymentZaloService.checkOrderStatus(app_trans_id);
      return res.status(200).json(result);
    } catch (error) {
      console.error("Error checking order status:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = PaymentZaloController;