// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/models/Claim.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database.js file for Sequelize setup

class Claim extends Model {}

Claim.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // Assuming you have a User model
            key: 'id',
        },
    },
    policyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'InsurancePolicies', // Assuming you have an InsurancePolicy model
            key: 'id',
        },
    },
    amountClaimed: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'approved', 'rejected'),
        defaultValue: 'pending',
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'Claim',
    tableName: 'claims',
    timestamps: true,
});

module.exports = Claim;