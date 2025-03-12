// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/routes/claimRoutes.js

const express = require('express');
const claimController = require('../controllers/claimController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to create a new claim
router.post('/', authMiddleware.verifyToken, claimController.createClaim);

// Route to get all claims
router.get('/', authMiddleware.verifyToken, claimController.getAllClaims);

// Route to get a specific claim by ID
router.get('/:id', authMiddleware.verifyToken, claimController.getClaimById);

// Route to update a claim by ID
router.put('/:id', authMiddleware.verifyToken, claimController.updateClaim);

// Route to delete a claim by ID
router.delete('/:id', authMiddleware.verifyToken, claimController.deleteClaim);

module.exports = router;