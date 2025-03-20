const {
  getPaymentTrackings,
  exportPaymentTrackingToCSV,
  contractInformationDetail,
} = require("../services/paymentTracking.service");

// Controller to fetch the list of payment trackings with pagination
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

// Controller to export payment tracking data as a CSV file
const downloadPaymentTrackingCSVControllers = async (req, res) => {
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

// Controller to fetch contract information details by contract ID
const contractInformationDetailControllers = async (req, res) => {
  try {
    const { id: contractId } = req.params;
    const result = await contractInformationDetail(contractId);
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
  downloadPaymentTrackingCSVControllers,
  contractInformationDetailControllers,
};
