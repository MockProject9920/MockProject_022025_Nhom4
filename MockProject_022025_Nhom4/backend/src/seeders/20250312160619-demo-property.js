"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("properties", [
      {
        id: 1,
        type: "Apartment",
        address: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA",
        year_built: 2005,
        lot_size: null,
        living_area: 900,
        bed_rooms: 2,
        bad_rooms: 1,
        attached_garage: false,
        additional_features: "Balcony, Gym Access",
        recent_renovation: "New Flooring",
        estimated_value: 450000,
        status: "Available",
      },
      {
        id: 2,
        type: "Condo",
        address: "456 Park Ave",
        city: "Chicago",
        state: "IL",
        zipCode: "60610",
        country: "USA",
        year_built: null,
        lot_size: null,
        living_area: 1200,
        bed_rooms: 3,
        bad_rooms: 2,
        attached_garage: false,
        additional_features: "Pool, Security System",
        recent_renovation: "Kitchen Remodel",
        estimated_value: 600000,
        status: "Sold",
      },
      {
        id: 3,
        type: "Town Home",
        address: "789 Elm St",
        city: "Houston",
        state: "TX",
        zipCode: "77002",
        country: "USA",
        year_built: 1998,
        lot_size: 3500,
        living_area: 2400,
        bed_rooms: 4,
        bad_rooms: 3.5,
        attached_garage: true,
        additional_features: "Fireplace, Private Backyard",
        recent_renovation: "Roof Replacement",
        estimated_value: 750000,
        status: "Pending",
      },
      {
        id: 4,
        type: "Other",
        address: "101 Ocean Dr",
        city: "Miami",
        state: "FL",
        zipCode: "33139",
        country: "USA",
        year_built: 1985,
        lot_size: 5000,
        living_area: 3500,
        bed_rooms: 5,
        bad_rooms: 4,
        attached_garage: true,
        additional_features: "Beachfront, Smart Home System",
        recent_renovation: "Full Renovation",
        estimated_value: 2500000,
        status: "Available",
      },
      {
        id: 5,
        type: "Apartment",
        address: "222 Sunset Blvd",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90028",
        country: "USA",
        year_built: null,
        lot_size: null,
        living_area: 1100,
        bed_rooms: 3,
        bad_rooms: 2,
        attached_garage: false,
        additional_features: "Rooftop Garden",
        recent_renovation: "New Appliances",
        estimated_value: 550000,
        status: "Available",
      },
      {
        id: 6,
        type: "Condo",
        address: "789 Lake Shore Dr",
        city: "Seattle",
        state: "WA",
        zipCode: "98101",
        country: "USA",
        year_built: null,
        lot_size: null,
        living_area: 1500,
        bed_rooms: 2,
        bad_rooms: 2,
        attached_garage: false,
        additional_features: "Waterfront View",
        recent_renovation: "New Windows",
        estimated_value: 700000,
        status: "Sold",
      },
      {
        id: 7,
        type: "Town Home",
        address: "567 Oak St",
        city: "Dallas",
        state: "TX",
        zipCode: "75PC001",
        country: "USA",
        year_built: 2000,
        lot_size: 4000,
        living_area: 2800,
        bed_rooms: 4,
        bad_rooms: 3,
        attached_garage: true,
        additional_features: "Gated Community, BBQ Area",
        recent_renovation: "Bathroom Remodel",
        estimated_value: 800000,
        status: "Pending",
      },
      {
        id: 8,
        type: "Other",
        address: "303 Mountain Rd",
        city: "Denver",
        state: "CO",
        zipCode: "80PC002",
        country: "USA",
        year_built: 1995,
        lot_size: 6000,
        living_area: 3800,
        bed_rooms: 5,
        bad_rooms: 5,
        attached_garage: true,
        additional_features: "Mountain View, Large Deck",
        recent_renovation: "Full Interior Remodel",
        estimated_value: 1800000,
        status: "Available",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("properties", null, {});
  },
};
