"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Clients",
      [
        {
          id: 1001,
          name: "John Doe",
          email: "john.doe@email.com",
          password:
            "f5a5fd42d16a20302798ef6ed309979b573d5b6b3d6f9638f1a7878a76f6e3b4",
          type: "Small Business",
          address: "123 Main St, NY",
          phone_number: "123-456-7890",
          status: "Active",
        },
        {
          id: 1002,
          name: "Jane Smith",
          email: "jane.smith@email.com",
          password:
            "d7a8fbb307d7809469a4906ef6a9433c3f30ecbcbdb64eb6e2d5d3e864b29c3e",
          type: "Enterprise",
          address: "456 Elm St, CA",
          phone_number: "987-654-3210",
          status: "Active",
        },
        {
          id: 1003,
          name: "Mike Johnson",
          email: "mike.j@email.com",
          password:
            "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd16b92b450c9bfa8f9",
          type: "Small Business",
          address: "789 Pine St, TX",
          phone_number: "456-123-7890",
          status: "Inactive",
        },
        {
          id: 1004,
          name: "Emily Davis",
          email: "emily.d@email.com",
          password:
            "2c26b46b68ffc68ff99b453c1d30413413422e4aabbadba331d72f2f537a2c9d",
          type: "Enterprise",
          address: "321 Oak St, FL",
          phone_number: "321-987-6543",
          status: "Active",
        },
        {
          id: 1005,
          name: "Robert Brown",
          email: "robert.b@email.com",
          password:
            "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
          type: "Small Business",
          address: "555 Sunset Blvd, NY",
          phone_number: "159-753-4862",
          status: "Active",
        },
        {
          id: 1006,
          name: "Olivia Green",
          email: "olivia.g@email.com",
          password:
            "68b329da9893e34099c7d8ad5cb9c940b0ad0cfc6fc92d5584f77e37722619e1",
          type: "Small Business",
          address: "777 Ocean Ave, CA",
          phone_number: "852-456-9513",
          status: "Active",
        },
        {
          id: 1007,
          name: "David White",
          email: "david.w@email.com",
          password:
            "9e107d9d372bb6826bd81d3542a419d6bd6eaf6a1e5b6a01a438b2a56da136fc",
          type: "Enterprise",
          address: "654 Maple Rd, TX",
          phone_number: "741-852-9630",
          status: "Active",
        },
        {
          id: 1008,
          name: "Sophia Hall",
          email: "sophia.h@email.com",
          password:
            "3b5d5c3712955042212316173ccf37be800b126d9f59bff1f0e7e61a93a768e4",
          type: "Small Business",
          address: "852 Birch St, FL",
          phone_number: "963-258-7410",
          status: "Active",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Clients", null, {});
  },
};
