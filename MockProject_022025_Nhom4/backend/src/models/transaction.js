"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.PolicyContacts, {
        foreignKey: "policyId",
        targetKey: "id",
        as: "PolicyContacts",
      });

      Transaction.belongsTo(models.Claims, {
        foreignKey: "claimId",
        targetKey: "id",
        as: "Claims",
      });

      Transaction.hasMany(models.Invoices, {
        sourceKey: "id",
        foreignKey: "transactionId",
        as: "Invoices",
      });
    }
  }
  Transaction.init(
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
      type: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
      amount: {
        type: DataTypes.BIGINT,
      },
      method: {
        type: DataTypes.STRING,
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
      modelName: "Transaction",
      tableName: "Transaction",
      timestamps: true,
      underscored: true,
    }
  );
  return Transaction;
};
