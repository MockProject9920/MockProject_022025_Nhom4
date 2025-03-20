"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PaymentTrackings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      policyId: {
        type: Sequelize.INTEGER,
        field: "policy_id",
        references: {
          model: "PolicyContacts",
          key: "id",
        },
      },
      claimId: {
        type: Sequelize.INTEGER,
        field: "claim_id",
        references: {
          model: "Claims",
          key: "id",
        },
      },
      dueDate: {
        type: Sequelize.DATE,
        field: "due_date",
      },
      amount: {
        type: Sequelize.BIGINT,
      },
      status: {
        type: Sequelize.STRING,
      },
      reminderSent: {
        type: Sequelize.STRING,
        field: "reminder_sent",
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PaymentTrackings");
  },
};
