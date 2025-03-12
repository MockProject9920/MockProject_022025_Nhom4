// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route for user registration
router.post('/register', authController.register);

// Route for user login
router.post('/login', authController.login);

// Route for user logout
router.post('/logout', authMiddleware.verifyToken, authController.logout);

// Route for getting user profile (protected)
router.get('/profile', authMiddleware.verifyToken, authController.getProfile);

module.exports = router;