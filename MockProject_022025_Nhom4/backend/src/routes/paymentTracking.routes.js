const express = require("express");
const {
  paymenttrackingListControllers,
} = require("../controllers/paymenttracking.controller");

const router = express.Router();

router.get("/", paymenttrackingListControllers);

module.exports = router;
