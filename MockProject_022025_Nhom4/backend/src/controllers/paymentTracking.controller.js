const { getPaymentTrackings } = require("../services/paymentTracking.service");

const paymenttrackingListControllers = async (req, res) => {
  try {
    const result = await getPaymentTrackings();
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
};
