"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appraisers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appraisers.hasMany(models.AppraiserRequests, {
        sourceKey: "id",
        foreignKey: "appraiserId",
        as: "appraiser_requests",
      });

      Appraisers.hasMany(models.AppraiserReports, {
        sourceKey: "id",
        foreignKey: "appraiserId",
        as: "appraiser_reports",
      });
    }
  }
  Appraisers.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.STRING,
      type: DataTypes.STRING,
      phone: DataTypes.STRING,
      companyName: {
        type: DataTypes.STRING,
        field: "company_name",
      },
      taxNumber: {
        type: DataTypes.STRING,
        field: "tax_number",
      },
      experience: {
        type: DataTypes.STRING,
      },
      address: DataTypes.STRING,
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
      modelName: "appraisers",
      timestamps: true,
      underscored: true,
    }
  );
  return Appraisers;
};
