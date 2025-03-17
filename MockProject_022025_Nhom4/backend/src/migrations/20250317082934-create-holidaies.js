"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Holidaies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      holidayName: {
        type: Sequelize.STRING,
        field: "holiday_name",
      },
      holidayDate: {
        type: Sequelize.STRING,
        field: "holiday_date",
      },
      holidayType: {
        type: Sequelize.STRING,
        field: "holiday_type",
      },
      stateName: {
        type: Sequelize.STRING,
        field: "state_name",
      },
      description: {
        type: Sequelize.TEXT,
      },
      approvalAuthority: {
        type: Sequelize.STRING,
        field: "approval_authority",
      },
      establishmentProcess: {
        type: Sequelize.STRING,
        field: "establishment_process",
      },
      governmentOffices: {
        type: Sequelize.STRING,
        field: "government_offices",
      },
      bussinesses: {
        type: Sequelize.STRING,
      },
      schools: {
        type: Sequelize.STRING,
      },
      commonActivities: {
        type: Sequelize.TEXT,
        field: "common_activities",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Holidaies");
  },
};
