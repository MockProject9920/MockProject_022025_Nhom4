const express = require("express");
const TransactionController = require("../controllers/transaction.controller");

const router = express.Router();

router.get("/", TransactionController.listTransactions);
router.get("/detail/:transactionId", TransactionController.getTransactionDetail);
router.put("/update/:transactionId", TransactionController.updateTransaction);
router.post("/create", TransactionController.createTransaction); // Thêm endpoint tạo giao dịch
router.delete("/delete/:transactionId", TransactionController.deleteTransaction); // Thêm endpoint xóa giao dịch
router.get("/export-csv", TransactionController.exportTransactionsCSV);

module.exports = router;
