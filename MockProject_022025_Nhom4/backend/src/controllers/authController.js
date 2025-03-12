// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/controllers/authController.js

const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { token, user } = await authService.login(req.body);
        res.status(200).json({ message: 'Login successful', token, user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const verifyToken = async (req, res) => {
    try {
        const user = await authService.verifyToken(req.token);
        res.status(200).json({ message: 'Token is valid', user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = {
    register,
    login,
    verifyToken,
};