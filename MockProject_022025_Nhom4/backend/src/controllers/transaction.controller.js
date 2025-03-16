const TransactionService = require("../services/transaction.service");

class TransactionController {
  static async listTransactions(req, res) {
    try {
      const { page, limit, type, status, method } = req.query;

      const filters = {
        type: type || null,
        status: status || null,
        method: method || null,
      };

      const transactions = await TransactionService.getTransactions({
        page: parseInt(page) || 1,
        limit: parseInt(limit) || 10,
        filters,
      });

      return res.status(200).json({
        success: true,
        message: "Transactions retrieved successfully",
        data: transactions,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getTransactionDetail(req, res) {
    try {
      const { transactionId } = req.params;

      const transaction = await TransactionService.getTransactionById(transactionId);

      if (!transaction) {
        return res.status(404).json({
          success: false,
          message: "Transaction not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Transaction retrieved successfully",
        data: transaction,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async updateTransaction(req, res) {
    try {
      const { transactionId } = req.params;
      const updateData = req.body;

      const updatedTransaction = await TransactionService.updateTransaction(transactionId, updateData);

      return res.status(200).json({
        success: true,
        message: "Transaction updated successfully",
        data: updatedTransaction,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async exportTransactionsCSV(req, res) {
    try {
      const { type, status, method } = req.query;

      const filters = {
        type: type || null,
        status: status || null,
        method: method || null,
      };

      const filePath = await TransactionService.exportTransactionsToCSV(filters);

      res.download(filePath, "transactions.csv", (err) => {
        if (err) {
          res.status(500).json({ success: false, message: "Error exporting CSV" });
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error exporting transactions: " + error.message,
      });
    }
  }
}

module.exports = TransactionController;
