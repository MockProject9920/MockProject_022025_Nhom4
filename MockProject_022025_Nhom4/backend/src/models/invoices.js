"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoices.belongsTo(models.Transactions, {
        foreignKey: "transactionId",
        targetKey: "id",
        as: "transactions",
      });
    }
  }
  Invoices.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      transactionId: {
        type: DataTypes.INTEGER,
        field: "transaction_id",
      },
      amount: {
        type: DataTypes.BIGINT,
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
      modelName: "invoices",
      timestamps: true,
      underscored: true,
    }
  );
  return Invoices;
};
