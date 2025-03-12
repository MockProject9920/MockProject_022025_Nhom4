"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Premiums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Premiums.belongsTo(models.InsuranceProducts, {
        foreignKey: "insuranceProductId",
        targetKey: "id",
        as: "insurance_products",
      });
    }
  }
  Premiums.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      insuranceProductId: {
        type: DataTypes.INTEGER,
        field: "insurance_product_id",
      },
      productName: {
        type: DataTypes.STRING,
        field: "product_name",
      },
      insuranceType: {
        type: DataTypes.STRING,
        field: "insurance_type",
      },
      effectiveDate: {
        type: DataTypes.DATE,
        field: "effective_date",
      },
      state: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      rateFrom: {
        type: DataTypes.BIGINT,
      },
      rateTo: {
        type: DataTypes.BIGINT,
      },
      amount: {
        type: DataTypes.BIGINT,
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
      modelName: "premiums",
      timestamps: true,
      underscored: true,
    }
  );
  return Premiums;
};
