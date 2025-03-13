"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Claims extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Claims.belongsTo(models.PolicyContacts, {
        foreignKey: "policyContactId",
        targetKey: "id",
        as: "policy_contacts",
      });

      Claims.belongsTo(models.Users, {
        foreignKey: "userId",
        targetKey: "id",
        as: "users",
      });

      Claims.hasMany(models.PaymentTrackings, {
        sourceKey: "id",
        foreignKey: "claimId",
        as: "payment_trackings",
      });

      Claims.hasMany(models.Transactions, {
        sourceKey: "id",
        foreignKey: "claimId",
        as: "transactions",
      });
    }
  }
  Claims.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      policyContactId: {
        type: DataTypes.INTEGER,
        field: "policy_contact_id",
      },
      claimType: {
        type: DataTypes.STRING,
        field: "claim_type",
      },
      incidentType: {
        type: DataTypes.STRING,
        field: "incident_type",
      },
      claimDate: {
        type: DataTypes.DATE,
        field: "claim_date",
      },
      dueDate: {
        type: DataTypes.DATE,
        field: "due_date",
      },
      incidentDate: {
        type: DataTypes.DATE,
        field: "incident_date",
      },
      incidentDescription: {
        type: DataTypes.STRING,
        field: "incident_description",
      },
      claimAmount: {
        type: DataTypes.BIGINT,
        field: "claim_amount",
      },
      status: {
        type: DataTypes.STRING,
      },
      attachment: {
        type: DataTypes.STRING,
      },
      settlementAmount: {
        type: DataTypes.BIGINT,
        field: "settlement_amount",
      },
      settlementDate: {
        type: DataTypes.DATE,
        field: "settelement_date",
      },
      investigationDetails: {
        type: DataTypes.STRING,
        field: "investigation_details",
      },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
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
      modelName: "claims",
      timestamps: true,
      underscored: true,
    }
  );
  return Claims;
};
