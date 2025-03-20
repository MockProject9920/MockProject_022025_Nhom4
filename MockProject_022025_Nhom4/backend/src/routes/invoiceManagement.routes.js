const express = require("express");
const {
    createInvoiceController,
    deleteInvoiceController
} = require("../controllers/invoiceManagement.controller");

const router = express.Router();

router.post("/create", createInvoiceController);
router.delete("/delete/:id", deleteInvoiceController);
module.exports = router;