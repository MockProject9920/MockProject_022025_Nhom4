"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Transactions", {
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
      type: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      amount: {
        type: Sequelize.BIGINT,
      },
      method: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Transactions");
  },
};
