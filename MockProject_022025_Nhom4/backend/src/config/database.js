// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/config/database.js

const { Sequelize } = require('sequelize');
const mongoose = require('mongoose');
require('dotenv').config();

const dbType = process.env.DB_TYPE; // 'mysql', 'postgres', or 'mongodb'

let dbConnection;

if (dbType === 'mysql' || dbType === 'postgres') {
    const sequelize = new Sequelize(process.env.DB_URI, {
        dialect: dbType,
        logging: console.log, // You can replace this with a logger if needed
    });

    dbConnection = sequelize.authenticate()
        .then(() => {
            console.log('Database connection established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
} else if (dbType === 'mongodb') {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('MongoDB connection established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to MongoDB:', err);
        });
} else {
    console.error('Unsupported database type. Please set DB_TYPE to mysql, postgres, or mongodb.');
}

module.exports = { dbConnection };