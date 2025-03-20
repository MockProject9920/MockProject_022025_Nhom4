"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Properties.hasMany(models.AppraiserRequests, {
        sourceKey: "id",
        foreignKey: "propertyId",
        as: "AppraiserRequests",
      });
    }
  }
  Properties.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      country: DataTypes.STRING,
      yearBuilt: {
        type: DataTypes.STRING,
        field: "year_built",
      },
      lotSize: {
        type: DataTypes.STRING,
        field: "lot_size",
      },
      livingArea: {
        type: DataTypes.INTEGER,
        field: "living_area",
      },
      bedRooms: {
        type: DataTypes.INTEGER,
        field: "bed_rooms",
      },
      bathRooms: {
        type: DataTypes.INTEGER,
        field: "bad_rooms",
      },
      attachedGarage: {
        type: DataTypes.STRING,
        field: "attached_garage",
      },
      additionlalFeatures: {
        type: DataTypes.STRING,
        field: "additional_features",
      },
      recentRenovation: {
        type: DataTypes.STRING,
        field: "recent_renovation",
      },
      estimatedValue: {
        type: DataTypes.BIGINT,
        field: "estimated_value",
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
      modelName: "Properties",
      tableName: "Properties",
      timestamps: true,
      underscored: true,
    }
  );
  return Properties;
};
