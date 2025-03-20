// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/utils/cryptoHelper.js

const bcrypt = require('bcrypt');
const crypto = require('crypto');

const saltRounds = 10;

// Function to hash a password
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
};

// Function to compare a password with a hash
const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

// Function to generate a random token
const generateToken = (length = 32) => {
    return crypto.randomBytes(length).toString('hex');
};

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
};