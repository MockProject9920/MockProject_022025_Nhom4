"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Claims", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      policyContactId: {
        type: Sequelize.INTEGER,
        field: "policy_contact_id",
        references: {
          model: "PolicyContacts",
          key: "id",
        },
      },
      claimType: {
        type: Sequelize.STRING,
        field: "claim_type",
      },
      incidentType: {
        type: Sequelize.STRING,
        field: "incident_type",
      },
      claimDate: {
        type: Sequelize.DATE,
        field: "claim_date",
      },
      dueDate: {
        type: Sequelize.DATE,
        field: "due_date",
      },
      incidentDate: {
        type: Sequelize.DATE,
        field: "incident_date",
      },
      incidentDescription: {
        type: Sequelize.STRING,
        field: "incident_description",
      },
      claimAmount: {
        type: Sequelize.BIGINT,
        field: "claim_amount",
      },
      status: {
        type: Sequelize.STRING,
      },
      attachment: {
        type: Sequelize.STRING,
      },
      settlementAmount: {
        type: Sequelize.BIGINT,
        field: "settlement_amount",
      },
      settlementDate: {
        type: Sequelize.DATE,
        field: "settelement_date",
      },
      investigationDetails: {
        type: Sequelize.STRING,
        field: "investigation_details",
      },
      userId: {
        type: Sequelize.INTEGER,
        field: "user_id",
        references: {
          model: "Users",
          key: "id",
        },
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
    await queryInterface.dropTable("Claims");
  },
};
