module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("AppraiserRequests", [
      {
        id: 3001,
        appraiser_id: 3001,
        user_id: 2001,
        property_id: 1,
        client_id: 1001,
        number: "AR-001",
        created_at: "2025-03-01",
        assigned_to: 205,
        status: "Requested",
      },
      {
        id: 3002,
        appraiser_id: 3002,
        user_id: 2002,
        property_id: 2,
        client_id: 1002,
        number: "AR-002",
        created_at: "2025-03-02",
        assigned_to: 206,
        status: "Assigned",
      },
      {
        id: 3003,
        appraiser_id: 3003,
        user_id: 2003,
        property_id: 3,
        client_id: 1003,
        number: "AR-003",
        created_at: "2025-03-03",
        assigned_to: 207,
        status: "Assessed",
      },
      {
        id: 3004,
        appraiser_id: 3004,
        user_id: 2004,
        property_id: 4,
        client_id: 1004,
        number: "AR-004",
        created_at: "2025-03-04",
        assigned_to: 208,
        status: "Declined",
      },
      {
        id: 3005,
        appraiser_id: 3005,
        user_id: 2005,
        property_id: 5,
        client_id: 1005,
        number: "AR-005",
        created_at: "2025-03-05",
        assigned_to: 209,
        status: "Requested",
      },
      {
        id: 3006,
        appraiser_id: 3006,
        user_id: 2006,
        property_id: 6,
        client_id: 1006,
        number: "AR-006",
        created_at: "2025-03-06",
        assigned_to: 210,
        status: "Assigned",
      },
      {
        id: 3007,
        appraiser_id: 3007,
        user_id: 2007,
        property_id: 7,
        client_id: 1007,
        number: "AR-007",
        created_at: "2025-03-07",
        assigned_to: 211,
        status: "Assessed",
      },
      {
        id: 3008,
        appraiser_id: 3008,
        user_id: 2008,
        property_id: 8,
        client_id: 1008,
        number: "AR-008",
        created_at: "2025-03-08",
        assigned_to: 212,
        status: "Declined",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("AppraiserRequests", null, {});
  },
};
