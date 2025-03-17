"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Holidaies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Holidaies.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      holidayName: {
        type: DataTypes.STRING,
        field: "holiday_name",
      },
      holidayDate: {
        type: DataTypes.STRING,
        field: "holiday_date",
      },
      holidayType: {
        type: DataTypes.STRING,
        field: "holiday_type",
      },
      stateName: {
        type: DataTypes.STRING,
        field: "state_name",
      },
      description: {
        type: DataTypes.TEXT,
      },
      approvalAuthority: {
        type: DataTypes.STRING,
        field: "approval_authority",
      },
      establishmentProcess: {
        type: DataTypes.STRING,
        field: "establishment_process",
      },
      governmentOffices: {
        type: DataTypes.STRING,
        field: "government_offices",
      },
      bussinesses: {
        type: DataTypes.STRING,
      },
      schools: {
        type: DataTypes.STRING,
      },
      commonActivities: {
        type: DataTypes.TEXT,
        field: "common_activities",
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
      modelName: "Holidaies",
      timestamps: true,
    }
  );
  return Holidaies;
};
