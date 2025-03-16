const { Transactions, PolicyContacts, Claims, Clients, Users } = require("../models");
const { Op } = require("sequelize");
const transactionSchema = require("../validations/transaction.validation.js");
const { Parser } = require("json2csv");
const fs = require("fs");
const path = require("path");

class TransactionService {
  static async getTransactions({ page = 1, limit = 10, filters }) {
    try {
      const offset = (page - 1) * limit; // Tính offset cho phân trang

      // Tạo điều kiện tìm kiếm
      let whereClause = {};

      if (filters) {
        if (filters.type) whereClause.type = filters.type;
        if (filters.status) whereClause.status = filters.status;
        if (filters.method) whereClause.method = filters.method;
      }

      // Truy vấn dữ liệu từ database
      const { rows, count } = await Transactions.findAndCountAll({
        where: whereClause,
        include: [
          {
            model: PolicyContacts,
            as: "PolicyContacts",
            attributes: ["id", "property_details"],
            include: [
                {
                  model: Clients,
                  as: "Clients",
                  attributes: ["id", "name"],
                },
                {
                  model: Users,
                  as: "Users",
                  attributes: ["id", "name"],
                },
              ],
          },
          {
            model: Claims,
            as: "Claims",
            attributes: ["id", "claim_amount", "claim_type", "incident_type"],
          },
        ],
        offset,
        limit,
        order: [["createdAt", "DESC"]],
      });

      return {
        total: count,
        page,
        limit,
        transactions: rows,
      };
    } catch (error) {
      throw new Error("Error fetching transactions: " + error.message);
    }
  }

  static async getTransactionById(transactionId) {
    try {
      const transaction = await Transactions.findByPk(transactionId);

      return transaction;
    } catch (error) {
      throw new Error("Error fetching transaction: " + error.message);
    }
  }

  static async updateTransaction(transactionId, updateData) {
    try {
        const { error } = transactionSchema.validate(updateData);
        if (error) {
          throw new Error(error.message);
        }
        
        const transaction = await Transactions.findByPk(transactionId);

        if (!transaction) {
            throw new Error("Transaction not found");
        }
        
        await transaction.update(updateData);
        
        return transaction;
    } catch (error) {
      throw new Error("Error updating transaction: " + error.message);
    }
  }

  static async createTransaction(transactionData) {
    try {
      const { error } = transactionSchema.validate(transactionData);
      if (error) {
        throw new Error(error.message);
      }
      const newTransaction = await Transactions.create(transactionData);
      return newTransaction;
    } catch (error) {
      throw new Error("Error creating transaction: " + error.message);
    }
  }

  static async deleteTransaction(transactionId) {
    try {
      const transaction = await Transactions.findByPk(transactionId);
      if (!transaction) {
        throw new Error("Transaction not found");
      }
      await transaction.destroy();
      return;
    } catch (error) {
      throw new Error("Error deleting transaction: " + error.message);
    }
  }

  static async exportTransactionsToCSV(filters) {
    const exportDir = path.join(__dirname, "../exports");

    // Kiểm tra nếu thư mục chưa tồn tại thì tạo mới
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }
    try {
      // Lấy danh sách giao dịch từ DB
      let whereClause = {};
      if (filters.type) whereClause.type = filters.type;
      if (filters.status) whereClause.status = filters.status;
      if (filters.method) whereClause.method = filters.method;

      const transactions = await Transactions.findAll({ where: whereClause });

      if (!transactions || transactions.length === 0) {
        throw new Error("No transactions found for export.");
      }

      // Chuyển dữ liệu sang JSON đơn giản
      const csvData = transactions.map((t) => ({
        ID: t.id,
        PolicyID: t.policyId || "",
        ClaimID: t.claimId || "",
        Type: t.type,
        Date: t.date,
        Amount: t.amount,
        Method: t.method,
        Status: t.status,
      }));

      // Convert JSON to CSV
      const parser = new Parser();
      const csv = parser.parse(csvData);

      // Lưu file CSV tạm thời
      const filePath = path.join(__dirname, "../exports/transactions.csv");
      fs.writeFileSync(filePath, csv);

      return filePath;
    } catch (error) {
      throw new Error("Error generating CSV: " + error.message);
    }
  }
}

module.exports = TransactionService;
