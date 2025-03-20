"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(models.AppraiserRequests);
      // define association here
      Clients.hasMany(models.AppraiserRequests, {
        sourceKey: "id",
        foreignKey: "clientId",
        as: "AppraiserRequests",
      });

      Clients.hasMany(models.PolicyContacts, {
        sourceKey: "id",
        foreignKey: "clientId",
        as: "PolicyContacts",
      });
    }
  }
  Clients.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        field: "date_of_birth",
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        field: "phone_number",
      },
      status: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      image: {
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
      modelName: "Clients",
      tableName: "Clients",
      timestamps: true,
      underscored: true,
    }
  );
  return Clients;
};
