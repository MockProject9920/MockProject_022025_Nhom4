const express = require("express");
const TransactionController = require("../controllers/transaction.controller");

const router = express.Router();

router.get("/", TransactionController.listTransactions);
router.get("/detail/:transactionId", TransactionController.getTransactionDetail);
router.put("/update/:transactionId", TransactionController.updateTransaction);
router.get("/export-csv", TransactionController.exportTransactionsCSV);


module.exports = router;
