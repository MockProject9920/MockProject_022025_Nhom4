"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appraisers extends Model {
    static associate(models) {
      Appraisers.hasMany(models.AppraiserRequests, {
        sourceKey: "id",
        foreignKey: "appraiserId",
        as: "AppraiserRequests",
      });

      Appraisers.hasMany(models.AppraiserReports, {
        sourceKey: "id",
        foreignKey: "appraiserId",
        as: "AppraiserReports",
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

      modelName: "Appraisers",
      tableName: "Appraisers",
      timestamps: true,
      underscored: true,
    }
  );
  return Appraisers;
};
