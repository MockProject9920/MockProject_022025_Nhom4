"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("premiums", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      insuranceProductId: {
        type: Sequelize.INTEGER,
        field: "insurance_product_id",
        references: {
          model: "insurance_products",
          key: "id",
        },
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
      effectiveDate: {
        type: Sequelize.DATE,
        field: "effective_date",
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rateFrom: {
        type: Sequelize.BIGINT,
        field: "rate_from",
        allowNull: false,
      },
      rateTo: {
        type: Sequelize.BIGINT,
        field: "rate_to",
        allowNull: false,
      },
      amount: {
        type: Sequelize.BIGINT,
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
    await queryInterface.dropTable("premiums");
  },
};
