'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Holidays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      holiday_name: {
        type: Sequelize.STRING
      },
      holiday_date: {
        type: Sequelize.STRING
      },
      holiday_type: {
        type: Sequelize.STRING
      },
      state_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      approval_authority: {
        type: Sequelize.STRING
      },
      establishment_process: {
        type: Sequelize.STRING
      },
      government_offices: {
        type: Sequelize.STRING
      },
      businesses: {
        type: Sequelize.STRING
      },
      schools: {
        type: Sequelize.STRING
      },
      common_activities: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Holidays');
  }
};