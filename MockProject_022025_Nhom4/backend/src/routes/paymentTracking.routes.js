const express = require("express");
const {
  paymenttrackingListControllers,
  downloadPaymentTrackingCSV,
  paymentTrackingDetailController,
  paymentHistoryController,
} = require("../controllers/paymentTracking.controller");
const router = express.Router();

router.get("/", paymenttrackingListControllers);
router.get("/export/csv", downloadPaymentTrackingCSV);
router.get("/:id", paymentTrackingDetailController);
router.get("/history/list", paymentHistoryController);

module.exports = router;
