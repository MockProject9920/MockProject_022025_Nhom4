"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Invoices extends Model {
    static associate(models) {
      Invoices.belongsTo(models.Transactions, {
        foreignKey: "transaction_id",
        targetKey: "transaction_id",
        as: "Transactions"
      });
    }
  }

  Invoices.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    transaction_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      field: "transaction_id"
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "created_at"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "updated_at"
    }
  }, {
    sequelize,
    modelName: "Invoices",
    tableName: "invoices",
    timestamps: true,
    underscored: true
  });

  return Invoices;
};
