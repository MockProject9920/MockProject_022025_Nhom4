// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/controllers/policyController.js

const policyService = require('../services/policyService');

// Create a new insurance policy
exports.createPolicy = async (req, res) => {
    try {
        const policyData = req.body;
        const newPolicy = await policyService.createPolicy(policyData);
        res.status(201).json(newPolicy);
    } catch (error) {
        res.status(500).json({ message: 'Error creating policy', error: error.message });
    }
};

// Get all insurance policies
exports.getAllPolicies = async (req, res) => {
    try {
        const policies = await policyService.getAllPolicies();
        res.status(200).json(policies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching policies', error: error.message });
    }
};

// Get a specific insurance policy by ID
exports.getPolicyById = async (req, res) => {
    try {
        const policyId = req.params.id;
        const policy = await policyService.getPolicyById(policyId);
        if (!policy) {
            return res.status(404).json({ message: 'Policy not found' });
        }
        res.status(200).json(policy);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching policy', error: error.message });
    }
};

// Update an insurance policy
exports.updatePolicy = async (req, res) => {
    try {
        const policyId = req.params.id;
        const updatedData = req.body;
        const updatedPolicy = await policyService.updatePolicy(policyId, updatedData);
        if (!updatedPolicy) {
            return res.status(404).json({ message: 'Policy not found' });
        }
        res.status(200).json(updatedPolicy);
    } catch (error) {
        res.status(500).json({ message: 'Error updating policy', error: error.message });
    }
};

// Delete an insurance policy
exports.deletePolicy = async (req, res) => {
    try {
        const policyId = req.params.id;
        const deletedPolicy = await policyService.deletePolicy(policyId);
        if (!deletedPolicy) {
            return res.status(404).json({ message: 'Policy not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting policy', error: error.message });
    }
};