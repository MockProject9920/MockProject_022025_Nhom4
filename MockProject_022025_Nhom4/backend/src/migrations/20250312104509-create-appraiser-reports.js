"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("appraiser_reports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      appraiserId: {
        type: Sequelize.INTEGER,
        field: "appraiser_id",
        references: {
          model: "appraisers",
          key: "id",
        },
      },
      status: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      reportDetails: {
        type: Sequelize.STRING,
        field: "report_details",
      },
      assessmentDate: {
        type: Sequelize.STRING,
        field: "assessment_date",
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
    await queryInterface.dropTable("appraiser_reports");
  },
};
