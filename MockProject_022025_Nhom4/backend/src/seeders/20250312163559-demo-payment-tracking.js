"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "payment_trackings",
      [
        {
          id: 1,
          policy_id: 1,
          claim_id: null,
          due_date: "2024-02-01",
          amount: 500,
          status: "PAID",
          reminder_sent: "YES",
        },
        {
          id: 2,
          policy_id: 1,
          claim_id: null,
          due_date: "2024-03-01",
          amount: 500,
          status: "PAID",
          reminder_sent: "NO",
        },
        {
          id: 3,
          policy_id: 2,
          claim_id: null,
          due_date: "2024-03-15",
          amount: 1200,
          status: "PAID",
          reminder_sent: "YES",
        },
        {
          id: 4,
          policy_id: 3,
          claim_id: 1,
          due_date: "2024-02-20",
          amount: 2000,
          status: "OVERDUE",
          reminder_sent: "YES",
        },
        {
          id: 5,
          policy_id: 4,
          claim_id: null,
          due_date: "2024-04-01",
          amount: 1500,
          status: "PAID",
          reminder_sent: "NO",
        },
        {
          id: 6,
          policy_id: 5,
          claim_id: 2,
          due_date: "2024-04-15",
          amount: 2500,
          status: "FAILED",
          reminder_sent: "YES",
        },
        {
          id: 7,
          policy_id: 6,
          claim_id: null,
          due_date: "2024-05-01",
          amount: 900,
          status: "PAID",
          reminder_sent: "NO",
        },
        {
          id: 8,
          policy_id: 7,
          claim_id: 3,
          due_date: "2024-05-10",
          amount: 1800,
          status: "OVERDUE",
          reminder_sent: "YES",
        },
        {
          id: 9,
          policy_id: 8,
          claim_id: null,
          due_date: "2024-05-15",
          amount: 600,
          status: "PAID",
          reminder_sent: "NO",
        },
        {
          id: 10,
          policy_id: 5,
          claim_id: null,
          due_date: "2024-06-01",
          amount: 2200,
          status: "PAID",
          reminder_sent: "YES",
        },
        {
          id: 11,
          policy_id: 4,
          claim_id: null,
          due_date: "2024-06-10",
          amount: 1300,
          status: "PAID",
          reminder_sent: "NO",
        },
        {
          id: 12,
          policy_id: 1,
          claim_id: 4,
          due_date: "2024-06-15",
          amount: 750,
          status: "FAILED",
          reminder_sent: "YES",
        },
        {
          id: 13,
          policy_id: 2,
          claim_id: null,
          due_date: "2024-07-01",
          amount: 950,
          status: "PAID",
          reminder_sent: "NO",
        },
        {
          id: 14,
          policy_id: 3,
          claim_id: null,
          due_date: "2024-07-10",
          amount: 3000,
          status: "OVERDUE",
          reminder_sent: "YES",
        },
        {
          id: 15,
          policy_id: 4,
          claim_id: 5,
          due_date: "2024-07-15",
          amount: 1500,
          status: "PAID",
          reminder_sent: "NO",
        },
        {
          id: 16,
          policy_id: 5,
          claim_id: null,
          due_date: "2024-08-01",
          amount: 800,
          status: "PAID",
          reminder_sent: "YES",
        },
        {
          id: 17,
          policy_id: 6,
          claim_id: 6,
          due_date: "2024-08-10",
          amount: 1000,
          status: "FAILED",
          reminder_sent: "YES",
        },
        {
          id: 18,
          policy_id: 7,
          claim_id: null,
          due_date: "2024-08-15",
          amount: 2500,
          status: "PAID",
          reminder_sent: "NO",
        },
        {
          id: 19,
          policy_id: 8,
          claim_id: 8,
          due_date: "2024-09-01",
          amount: 1750,
          status: "OVERDUE",
          reminder_sent: "YES",
        },
        {
          id: 20,
          policy_id: 2,
          claim_id: null,
          due_date: "2024-09-10",
          amount: 850,
          status: "PAID",
          reminder_sent: "NO",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("payment_trackings", null, {});
  },
};
