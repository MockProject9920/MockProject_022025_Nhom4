// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/config/env.js

const dotenv = require('dotenv');

dotenv.config();

const envConfig = {
    dbUri: process.env.DB_URI,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 3000,
};

module.exports = envConfig;