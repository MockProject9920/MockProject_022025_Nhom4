const {
  getPaymentTrackings,
  exportPaymentTrackingToCSV,
  getPaymentTrackingById,
  getPaymentHistory,
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


// Controller function to handle the retrieval of payment tracking details
// This function is triggered when a request to get payment tracking details by ID is received.
const paymentTrackingDetailController = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentDetail = await getPaymentTrackingById(id);

    if (!paymentDetail) {
      return res.status(404).json({
        success: false,
        message: "Payment tracking not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: paymentDetail,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
};


// Controller function to handle retrieval of payment history with pagination
const paymentHistoryController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const result = await getPaymentHistory(page, limit);
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

module.exports = {
  paymenttrackingListControllers,
  downloadPaymentTrackingCSV,
  paymentTrackingDetailController,
  paymentHistoryController,
};
