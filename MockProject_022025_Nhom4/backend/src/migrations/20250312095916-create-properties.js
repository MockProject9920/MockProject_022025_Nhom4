"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("properties", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      zipCode: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      yearBuilt: {
        type: Sequelize.STRING,
        field: "year_built",
      },
      lotSize: {
        type: Sequelize.STRING,
        field: "lot_size",
      },
      livingArea: {
        type: Sequelize.INTEGER,
        field: "living_area",
      },
      bedRooms: {
        type: Sequelize.INTEGER,
        field: "bed_rooms",
      },
      bathRooms: {
        type: Sequelize.INTEGER,
        field: "bad_rooms",
      },
      attachedGarage: {
        type: Sequelize.STRING,
        field: "attached_garage",
      },
      additionlalFeatures: {
        type: Sequelize.STRING,
        field: "additional_features",
      },
      recentRenovation: {
        type: Sequelize.STRING,
        field: "recent_renovation",
      },
      estimatedValue: {
        type: Sequelize.BIGINT,
        field: "estimated_value",
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
    await queryInterface.dropTable("properties");
  },
};
