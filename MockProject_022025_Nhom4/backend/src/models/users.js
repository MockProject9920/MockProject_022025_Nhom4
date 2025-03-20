"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.AppraiserRequests, {
        sourceKey: "id",
        foreignKey: "userId",
        as: "AppraiserRequests",
      });

      Users.hasMany(models.PolicyContacts, {
        sourceKey: "id",
        foreignKey: "userId",
        as: "PolicyContacts",
      });

      Users.hasMany(models.Claims, {
        sourceKey: "id",
        foreignKey: "userId",
        as: "Claims",
      });
    }
  }
  Users.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
      memberSince: {
        type: DataTypes.DATE,
        field: "member_since",
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
      modelName: "Users",
      tableName: "Users",
      timestamps: true,
      underscored: true,
    }
  );
  return Users;
};
