// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/controllers/claimController.js

const Claim = require('../models/Claim');
const claimService = require('../services/claimService');

// Create a new claim
exports.createClaim = async (req, res) => {
    try {
        const claimData = req.body;
        const newClaim = await claimService.createClaim(claimData);
        res.status(201).json(newClaim);
    } catch (error) {
        res.status(500).json({ message: 'Error creating claim', error: error.message });
    }
};

// Get all claims
exports.getAllClaims = async (req, res) => {
    try {
        const claims = await claimService.getAllClaims();
        res.status(200).json(claims);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching claims', error: error.message });
    }
};

// Get a claim by ID
exports.getClaimById = async (req, res) => {
    try {
        const claimId = req.params.id;
        const claim = await claimService.getClaimById(claimId);
        if (!claim) {
            return res.status(404).json({ message: 'Claim not found' });
        }
        res.status(200).json(claim);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching claim', error: error.message });
    }
};

// Update a claim
exports.updateClaim = async (req, res) => {
    try {
        const claimId = req.params.id;
        const updatedData = req.body;
        const updatedClaim = await claimService.updateClaim(claimId, updatedData);
        if (!updatedClaim) {
            return res.status(404).json({ message: 'Claim not found' });
        }
        res.status(200).json(updatedClaim);
    } catch (error) {
        res.status(500).json({ message: 'Error updating claim', error: error.message });
    }
};

// Delete a claim
exports.deleteClaim = async (req, res) => {
    try {
        const claimId = req.params.id;
        const deletedClaim = await claimService.deleteClaim(claimId);
        if (!deletedClaim) {
            return res.status(404).json({ message: 'Claim not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting claim', error: error.message });
    }
};