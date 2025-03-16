const express = require("express");
const {
  paymenttrackingListControllers,
  downloadPaymentTrackingCSVControllers,
  contractInformationDetailControllers,
} = require("../controllers/paymenttracking.controller");

const router = express.Router();

router.get("/", paymenttrackingListControllers);
router.get("/export/csv", downloadPaymentTrackingCSVControllers);
router.get("/contract-detail/:id", contractInformationDetailControllers);

module.exports = router;
