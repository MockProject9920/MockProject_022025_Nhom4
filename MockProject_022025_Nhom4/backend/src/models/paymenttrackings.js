"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PaymentTrackings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PaymentTrackings.belongsTo(models.PolicyContacts, {
        foreignKey: "policyId",
        targetKey: "id",
        as: "policy_contacts",
      });

      PaymentTrackings.belongsTo(models.Claims, {
        foreignKey: "claimId",
        targetKey: "id",
        as: "claims",
      });
    }
  }
  PaymentTrackings.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      policyId: {
        type: DataTypes.INTEGER,
        field: "policy_id",
      },
      claimId: {
        type: DataTypes.INTEGER,
        field: "claim_id",
      },
      dueDate: {
        type: DataTypes.DATE,
        field: "due_date",
      },
      amount: DataTypes.BIGINT,
      status: DataTypes.STRING,
      reminderSent: {
        type: DataTypes.STRING,
        field: "reminder_sent",
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
      modelName: "payment_trackings",
      timestamps: true,
      underscored: true,
    }
  );
  return PaymentTrackings;
};
