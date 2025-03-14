const express = require("express");
const invoiceController = require("../controllers/invoiceController");
const router = express.Router();

router.put("/update/:id", invoiceController.updateInvoice);
router.get("/list", invoiceController.getInvoices);

module.exports = router;
