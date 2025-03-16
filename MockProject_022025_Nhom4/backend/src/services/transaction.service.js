const { Transactions, PolicyContacts, Claims, Clients, Users } = require("../models");
const { Op } = require("sequelize");
const transactionSchema = require("../validations/transaction.validation.js");
const { Parser } = require("json2csv");
const fs = require("fs");
const path = require("path");

class TransactionService {
  static async getTransactions({ page = 1, limit = 10, filters }) {
    try {
      const offset = (page - 1) * limit;

      let whereClause = {};

      if (filters) {
        if (filters.type) whereClause.type = filters.type;
        if (filters.status) whereClause.status = filters.status;
        if (filters.method) whereClause.method = filters.method;
      }

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

  static async exportTransactionsToCSV(filters) {
    try {
      const transactions = await Transactions.findAll({
        where: filters,
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
      });

      const json2csvParser = new Parser();
      const csv = json2csvParser.parse(transactions);

      const filePath = path.join(__dirname, "../../exports", "transactions.csv");
      fs.writeFileSync(filePath, csv);

      return filePath;
    } catch (error) {
      throw new Error("Error exporting transactions to CSV: " + error.message);
    }
  }
}

module.exports = TransactionService;
