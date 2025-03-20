"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AppraiserRequests", {
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
          model: "Appraisers",
          key: "id",
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        field: "user_id",
        references: {
          model: "Users",
          key: "id",
        },
      },
      propertyId: {
        type: Sequelize.INTEGER,
        field: "property_id",
        references: {
          model: "Properties",
          key: "id",
        },
      },
      clientId: {
        type: Sequelize.INTEGER,
        field: "client_id",
        references: {
          model: "Clients",
          key: "id",
        },
      },
      number: {
        type: Sequelize.STRING,
      },
      assignedTo: {
        type: Sequelize.INTEGER,
        field: "assigned_to",
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
    await queryInterface.dropTable("AppraiserRequests");
  },
};
