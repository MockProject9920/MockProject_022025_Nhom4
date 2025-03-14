"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("InsuranceProducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productName: {
        type: Sequelize.STRING,
        field: "product_name",
        allowNull: false,
      },
      insuranceType: {
        type: Sequelize.STRING,
        field: "insurance_type",
        allowNull: false,
      },
      coverageAmout: {
        type: Sequelize.BIGINT,
        field: "coverage_amount",
        allowNull: false,
      },
      paymentMethod: {
        type: Sequelize.STRING,
        field: "payment_method",
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "active",
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
    await queryInterface.dropTable("InsuranceProducts");
  },
};
