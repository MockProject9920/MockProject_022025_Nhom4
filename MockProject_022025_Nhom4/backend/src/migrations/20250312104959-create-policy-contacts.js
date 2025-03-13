"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("policy_contacts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientId: {
        type: Sequelize.INTEGER,
        field: "client_id",
        references: {
          model: "clients",
          key: "id",
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        field: "user_id",
        references: {
          model: "users",
          key: "id",
        },
      },
      propertyDetails: {
        type: Sequelize.STRING,
        field: "property_details",
      },
      premiumCode: {
        type: Sequelize.STRING,
        field: "premium_code",
      },
      insuranceProductId: {
        type: Sequelize.INTEGER,
        field: "insurance_product_id",
        references: {
          model: "insurance_products",
          key: "id",
        },
      },
      coverageAmount: {
        type: Sequelize.BIGINT,
        field: "coverage_amount",
      },
      policyStartDate: {
        type: Sequelize.DATE,
        field: "policy_start_date",
      },
      policyEndDate: {
        type: Sequelize.DATE,
        field: "policy_end_date",
      },
      frequency: {
        type: Sequelize.STRING,
      },
      paymentSchedule: {
        type: Sequelize.STRING,
      },
      exclusions: {
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
    await queryInterface.dropTable("policy_contacts");
  },
};
