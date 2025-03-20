const express = require("express");
const {
  paymenttrackingListControllers,
  downloadPaymentTrackingCSVControllers,
  contractInformationDetailControllers,
  paymentTrackingDetailController,
  paymentHistoryController,
} = require("../controllers/paymentTracking.controller");
const router = express.Router();

router.get("/", paymenttrackingListControllers);
router.get("/export/csv", paymenttrackingListControllers);
router.get("/:id", paymentTrackingDetailController);
router.get("/history/list", paymentHistoryController);
router.get("/export/csv", downloadPaymentTrackingCSVControllers);
router.get("/contract-detail/:id", contractInformationDetailControllers);

module.exports = router;
