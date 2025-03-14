"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("holidays", {
      holiday_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      holiday_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      holiday_date: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      holiday_type: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      state_name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      approval_authority: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      establishment_process: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      government_offices: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      businesses: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      schools: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      common_activities: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("holidays");
  },
};
