const {
  getPaymentTrackings,
  exportPaymentTrackingToCSV,
} = require("../services/paymentTracking.service");

const paymenttrackingListControllers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const result = await getPaymentTrackings(page, limit);
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
};

const downloadPaymentTrackingCSV = async (req, res) => {
  try {
    const filePath = await exportPaymentTrackingToCSV();
    return res.download(filePath, "payment_tracking.csv", (err) => {
      if (err) {
        console.error("Error downloading file:", err);
        res.status(500).send("Error downloading file");
      }
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
};

module.exports = {
  paymenttrackingListControllers,
  downloadPaymentTrackingCSV,
};
