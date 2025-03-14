const express = require("express");
const {
  paymenttrackingListControllers,
  downloadPaymentTrackingCSV,
} = require("../controllers/paymenttracking.controller");

const router = express.Router();

router.get("/", paymenttrackingListControllers);
router.get("/export/csv", downloadPaymentTrackingCSV);

module.exports = router;
