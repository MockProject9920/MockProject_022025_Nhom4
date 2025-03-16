"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    static associate(models) {
      // Define associations here
      Transactions.hasMany(models.Invoices, {
        foreignKey: "transaction_id",
        as: "Invoices"
      });
    }
  }

  Transactions.init({
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    policy_contract_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    claim_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Transactions',
    tableName: 'transactions',
    timestamps: false,
    underscored: true
  });

  return Transactions;
};
