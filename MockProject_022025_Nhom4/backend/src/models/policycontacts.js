"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PolicyContacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PolicyContacts.belongsTo(models.Clients, {
        foreignKey: "clientId",
        targetKey: "id",
        as: "Clients",
      });

      PolicyContacts.belongsTo(models.Users, {
        foreignKey: "userId",
        targetKey: "id",
        as: "Users",
      });

      PolicyContacts.belongsTo(models.InsuranceProducts, {
        foreignKey: "insuranceProductId",
        targetKey: "id",
        as: "InsuranceProducts",
      });

      PolicyContacts.hasMany(models.Claims, {
        sourceKey: "id",
        foreignKey: "policyContactId",
        as: "Claims",
      });

      PolicyContacts.hasMany(models.PaymentTrackings, {
        sourceKey: "id",
        foreignKey: "policyId",
        as: "PaymentTrackings",
      });

      PolicyContacts.hasMany(models.Transaction, {
        sourceKey: "id",
        foreignKey: "policyId",
        as: "Transaction",
      });
    }
  }
  PolicyContacts.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      clientId: {
        type: DataTypes.INTEGER,
        field: "client_id",
      },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
      propertyDetails: {
        type: DataTypes.STRING,
        field: "property_details",
      },
      premiumCode: {
        type: DataTypes.STRING,
        field: "premium_code",
      },
      insuranceProductId: {
        type: DataTypes.INTEGER,
        field: "insurance_product_id",
      },
      coverageAmount: {
        type: DataTypes.BIGINT,
        field: "coverage_amount",
      },
      policyStartDate: {
        type: DataTypes.DATE,
        field: "policy_start_date",
      },
      policyEndDate: {
        type: DataTypes.DATE,
        field: "policy_end_date",
      },
      frequency: {
        type: DataTypes.STRING,
      },
      paymentSchedule: {
        type: DataTypes.STRING,
      },
      exclusions: {
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
      modelName: "PolicyContacts",
      tableName: "PolicyContacts",
      timestamps: true,
      underscored: true,
    }
  );
  return PolicyContacts;
};
