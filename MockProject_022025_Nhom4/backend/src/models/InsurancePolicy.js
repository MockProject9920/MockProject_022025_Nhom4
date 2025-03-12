// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/models/InsurancePolicy.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database.js file for Sequelize setup

class InsurancePolicy extends Model {}

InsurancePolicy.init({
    policyNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    policyHolderName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coverageAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    premium: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'expired'),
        defaultValue: 'active',
    },
}, {
    sequelize,
    modelName: 'InsurancePolicy',
    tableName: 'insurance_policies',
    timestamps: true,
});

module.exports = InsurancePolicy;