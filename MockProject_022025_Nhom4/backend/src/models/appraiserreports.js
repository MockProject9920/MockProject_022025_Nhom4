"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AppraiserReports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AppraiserReports.belongsTo(models.Appraisers, {
        foreignKey: "appraiserId",
        targetKey: "id",
        as: "appraisers",
      });
    }
  }
  AppraiserReports.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      appraiserId: {
        type: DataTypes.INTEGER,
        field: "appraiser_id",
      },
      status: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
      },
      reportDetails: {
        type: DataTypes.STRING,
        field: "report_details",
      },
      assessmentDate: {
        type: DataTypes.STRING,
        field: "assessment_date",
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
      modelName: "appraiser_reports",
      timestamps: true,
      underscored: true,
    }
  );
  return AppraiserReports;
};
