"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("insurance_products", [
      {
        id: 1,
        product_name: "Standard Homeowners",
        insurance_type: "Homeowners",
        coverage_amount: 250000,
        payment_method: "Annual, Monthly",
      },
      {
        id: 2,
        product_name: "Premium Homeowners",
        insurance_type: "Homeowners",
        coverage_amount: 500000,
        payment_method: "Annual, Monthly",
      },
      {
        id: 3,
        product_name: "Basic Homeowners",
        insurance_type: "Homeowners",
        coverage_amount: 150000,
        payment_method: "Annual, Monthly",
      },
      {
        id: 4,
        product_name: "Homeowners Plus",
        insurance_type: "Homeowners",
        coverage_amount: 400000,
        payment_method: "Annual, Monthly",
      },
      {
        id: 5,
        product_name: "Elite Homeowners",
        insurance_type: "Homeowners",
        coverage_amount: 1000000,
        payment_method: "Annual, Quarterly",
      },
      {
        id: 6,
        product_name: "Basic Flood Protection",
        insurance_type: "Flood",
        coverage_amount: 200000,
        payment_method: "Annual, Monthly",
      },
      {
        id: 7,
        product_name: "Comprehensive Flood",
        insurance_type: "Flood",
        coverage_amount: 500000,
        payment_method: "Annual, Monthly",
      },
      {
        id: 8,
        product_name: "National Flood Program",
        insurance_type: "Flood",
        coverage_amount: 250000,
        payment_method: "Annual",
      },
      {
        id: 9,
        product_name: "Coastal Flood Coverage",
        insurance_type: "Flood",
        coverage_amount: 600000,
        payment_method: "Annual, Quarterly",
      },
      {
        id: 10,
        product_name: "High-Risk Flood Protection",
        insurance_type: "Flood",
        coverage_amount: 750000,
        payment_method: "Annual",
      },
      {
        id: 11,
        product_name: "Basic Earthquake Coverage",
        insurance_type: "Earthquake",
        coverage_amount: 300000,
        payment_method: "Annual, Monthly",
      },
      {
        id: 12,
        product_name: "Comprehensive Earthquake",
        insurance_type: "Earthquake",
        coverage_amount: 700000,
        payment_method: "Annual, Quarterly",
      },
      {
        id: 13,
        product_name: "California Earthquake Plan",
        insurance_type: "Earthquake",
        coverage_amount: 500000,
        payment_method: "Annual",
      },
      {
        id: 14,
        product_name: "Seismic Risk Protection",
        insurance_type: "Earthquake",
        coverage_amount: 800000,
        payment_method: "Annual, Quarterly",
      },
      {
        id: 15,
        product_name: "West Coast Earthquake Plus",
        insurance_type: "Earthquake",
        coverage_amount: 1200000,
        payment_method: "Annual, Monthly",
      },
      {
        id: 16,
        product_name: "Jewelry & Valuables Basic",
        insurance_type: "Additional Coverage",
        coverage_amount: 50000,
        payment_method: "Annual, Monthly",
      },
      {
        id: 17,
        product_name: "Luxury Valuables Protection",
        insurance_type: "Additional Coverage",
        coverage_amount: 200000,
        payment_method: "Annual, Quarterly",
      },
      {
        id: 18,
        product_name: "Fine Art & Collectibles",
        insurance_type: "Additional Coverage",
        coverage_amount: 500000,
        payment_method: "Annual",
      },
      {
        id: 19,
        product_name: "Electronics & Gadgets Cover",
        insurance_type: "Additional Coverage",
        coverage_amount: 100000,
        payment_method: "Annual, Monthly",
      },
      {
        id: 20,
        product_name: "High-Net-Worth Protection",
        insurance_type: "Additional Coverage",
        coverage_amount: 2000000,
        payment_method: "Annual, Quarterly",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("insurance_products", null, {});
  },
};
