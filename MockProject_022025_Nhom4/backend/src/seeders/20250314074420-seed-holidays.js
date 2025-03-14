"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("holidays", [
      {
        holiday_name: "New Year's Day",
        holiday_date: "January 1",
        holiday_type: "Federal Holiday",
        state_name: null,
        description: "Celebration of the first day of the new year",
        approval_authority: "US Congress and President",
        establishment_process: "Established by federal law",
        government_offices: "Closed",
        businesses: "Mostly closed",
        schools: "Closed",
        common_activities: "Family gatherings, travel, community events",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        holiday_name: "Martin Luther King, Jr. Day",
        holiday_date: "Third Monday in January",
        holiday_type: "Federal Holiday",
        state_name: null,
        description: "Honors civil rights leader Martin Luther King, Jr.",
        approval_authority: "US Congress and President",
        establishment_process: "Established by federal law",
        government_offices: "Closed",
        businesses: "Mostly closed",
        schools: "Closed",
        common_activities: "Memorial services, educational events",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các ngày lễ khác nếu cần
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("holidays", null, {});
  },
};
