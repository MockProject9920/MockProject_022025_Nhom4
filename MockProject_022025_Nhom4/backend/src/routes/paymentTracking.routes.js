const express = require("express");
const {
  paymenttrackingListControllers,
  downloadPaymentTrackingCSV,
  paymentTrackingDetailController,
} = require("../controllers/paymenttracking.controller");

const router = express.Router();

router.get("/", paymenttrackingListControllers);
router.get("/export/csv", downloadPaymentTrackingCSV);
router.get("/:id", paymentTrackingDetailController);

module.exports = router;
