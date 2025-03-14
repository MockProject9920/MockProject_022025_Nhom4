"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Invoices",
      [
        { id: 5001, transaction_id: 1, amount: 500, status: "Paid" },
        { id: 5002, transaction_id: 2, amount: 700, status: "Paid" },
        {
          id: 5003,
          transaction_id: 3,
          amount: 1200.0,
          status: "Pending",
        },
        {
          id: 5004,
          transaction_id: 4,
          amount: 2000.0,
          status: "Paid",
        },
        {
          id: 5005,
          transaction_id: 5,
          amount: 5000.0,
          status: "Pending",
        },
        { id: 5006, transaction_id: 6, amount: 850, status: "Paid" },
        {
          id: 5007,
          transaction_id: 7,
          amount: 1500.0,
          status: "Paid",
        },
        {
          id: 5008,
          transaction_id: 8,
          amount: 600,
          status: "Overdue",
        },
        {
          id: 5009,
          transaction_id: 9,
          amount: 3200.0,
          status: "Paid",
        },
        { id: 5010, transaction_id: 10, amount: 900, status: "Paid" },
        {
          id: 5011,
          transaction_id: 11,
          amount: 750,
          status: "Pending",
        },
        {
          id: 5012,
          transaction_id: 12,
          amount: 2500.0,
          status: "Paid",
        },
        {
          id: 5013,
          transaction_id: 13,
          amount: 1100.0,
          status: "Overdue",
        },
        { id: 5014, transaction_id: 14, amount: 950, status: "Paid" },
        {
          id: 5015,
          transaction_id: 15,
          amount: 4000.0,
          status: "Pending",
        },
        { id: 5016, transaction_id: 16, amount: 650, status: "Paid" },
        {
          id: 5017,
          transaction_id: 17,
          amount: 3750.0,
          status: "Paid",
        },
        {
          id: 5018,
          transaction_id: 18,
          amount: 5500.0,
          status: "Overdue",
        },
        {
          id: 5019,
          transaction_id: 19,
          amount: 1800.0,
          status: "Pending",
        },
        {
          id: 5020,
          transaction_id: 20,
          amount: 2200.0,
          status: "Paid",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Invoices", null, {});
  },
};
