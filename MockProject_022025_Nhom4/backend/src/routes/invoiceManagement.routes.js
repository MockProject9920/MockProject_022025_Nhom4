const express = require("express");
const {
    createInvoiceController,
    deleteInvoiceController,
    updateInvoiceController,
    getInvoiceController
} = require("../controllers/invoiceManagement.controller");

const router = express.Router();

router.post("/create", createInvoiceController);
router.delete("/delete/:id", deleteInvoiceController);
router.get("/list", getInvoiceController);
router.put("/update/:id", updateInvoiceController);
module.exports = router;