"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AppraiserRequests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AppraiserRequests.belongsTo(models.Appraisers, {
        foreignKey: "appraiserId",
        targetKey: "id",
        as: "Appraisers",
      });

      AppraiserRequests.belongsTo(models.Users, {
        foreignKey: "userId",
        targetKey: "id",
        as: "Users",
      });

      AppraiserRequests.belongsTo(models.Properties, {
        foreignKey: "propertyId",
        targetKey: "id",
        as: "Properties",
      });

      AppraiserRequests.belongsTo(models.Clients, {
        foreignKey: "clientId",
        targetKey: "id",
        as: "Clients",
      });
    }
  }
  AppraiserRequests.init(
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
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
      propertyId: {
        type: DataTypes.INTEGER,
        field: "property_id",
      },
      clientId: {
        type: DataTypes.INTEGER,
        field: "client_id",
      },
      number: {
        type: DataTypes.STRING,
      },
      assignedTo: {
        type: DataTypes.INTEGER,
        field: "assigned_to",
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
      modelName: "AppraiserRequests",
      tableName: "AppraiserRequests",
      timestamps: true,
      underscored: true,
    }
  );
  return AppraiserRequests;
};
