'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Holidays extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Holidays.init({
    holiday_name: DataTypes.STRING,
    holiday_date: DataTypes.STRING,
    holiday_type: DataTypes.STRING,
    state_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    approval_authority: DataTypes.STRING,
    establishment_process: DataTypes.STRING,
    government_offices: DataTypes.STRING,
    businesses: DataTypes.STRING,
    schools: DataTypes.STRING,
    common_activities: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Holidays',
  });
  return Holidays;
};