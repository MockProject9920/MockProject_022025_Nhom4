module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("AppraiserReports", [
      {
        appraiser_id: 3001,
        status: "Requested",
        number: 1001,
        type: "Home",
        report_details: "Initial request submitted",
        assessment_date: "2024-02-01",
      },
      {
        appraiser_id: 3002,
        status: "Declined",
        number: 1002,
        type: "Condo",
        report_details: "Not within service area",
        assessment_date: "2024-02-03",
      },
      {
        appraiser_id: 3003,
        status: "Assess",
        number: 1003,
        type: "Townhouse",
        report_details: "Structural integrity check",
        assessment_date: "2024-02-05",
      },
      {
        appraiser_id: 3004,
        status: "Assigned",
        number: 1004,
        type: "Home",
        report_details: "Appraiser assigned",
        assessment_date: "2024-02-07",
      },
      {
        appraiser_id: 3005,
        status: "Requested",
        number: 1005,
        type: "Other",
        report_details: "Waiting for approval",
        assessment_date: "2024-02-09",
      },
      {
        appraiser_id: 3006,
        status: "Declined",
        number: 1006,
        type: "Home",
        report_details: "Incomplete documentation",
        assessment_date: "2024-02-11",
      },
      {
        appraiser_id: 3007,
        status: "Assess",
        number: 1007,
        type: "Condo",
        report_details: "Fire damage assessment",
        assessment_date: "2024-02-13",
      },
      {
        appraiser_id: 3008,
        status: "Assigned",
        number: 1008,
        type: "Townhouse",
        report_details: "Appraiser on-site visit",
        assessment_date: "2024-02-15",
      },
      {
        appraiser_id: 3009,
        status: "Requested",
        number: 1009,
        type: "Home",
        report_details: "Pending homeowner response",
        assessment_date: "2024-02-17",
      },
      {
        appraiser_id: 3010,
        status: "Declined",
        number: 1010,
        type: "Other",
        report_details: "Conflict of interest",
        assessment_date: "2024-02-19",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("AppraiserReports", null, {});
  },
};
