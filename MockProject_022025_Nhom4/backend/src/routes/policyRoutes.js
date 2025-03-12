// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/routes/policyRoutes.js

const express = require('express');
const policyController = require('../controllers/policyController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new insurance policy
router.post('/', authMiddleware.verifyToken, policyController.createPolicy);

// Get all insurance policies
router.get('/', authMiddleware.verifyToken, policyController.getAllPolicies);

// Get a specific insurance policy by ID
router.get('/:id', authMiddleware.verifyToken, policyController.getPolicyById);

// Update an insurance policy by ID
router.put('/:id', authMiddleware.verifyToken, policyController.updatePolicy);

// Delete an insurance policy by ID
router.delete('/:id', authMiddleware.verifyToken, policyController.deletePolicy);

module.exports = router;