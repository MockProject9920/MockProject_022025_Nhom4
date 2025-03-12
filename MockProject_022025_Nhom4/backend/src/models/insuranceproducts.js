"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class InsuranceProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InsuranceProducts.hasMany(models.Premiums, {
        sourceKey: "id",
        foreignKey: "insuranceProductId",
        as: "premiums",
      });

      InsuranceProducts.hasMany(models.PolicyContacts, {
        sourceKey: "id",
        foreignKey: "insuranceProductId",
        as: "policy_contacts",
      });
    }
  }
  InsuranceProducts.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      productName: {
        type: DataTypes.STRING,
        field: "product_name",
      },
      insuranceType: {
        type: DataTypes.STRING,
        field: "insurance_type",
      },
      coverageAmout: {
        type: DataTypes.BIGINT,
        field: "coverage_amount",
      },
      paymentMethod: {
        type: DataTypes.STRING,
        field: "payment_method",
      },
      status: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "insurance_products",
      timestamps: true,
      underscored: true,
    }
  );
  return InsuranceProducts;
};
