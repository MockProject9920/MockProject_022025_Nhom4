// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/services/policyService.js

const { InsurancePolicy } = require('../models/InsurancePolicy');

// Create a new insurance policy
const createPolicy = async (policyData) => {
    try {
        const newPolicy = await InsurancePolicy.create(policyData);
        return newPolicy;
    } catch (error) {
        throw new Error('Error creating policy: ' + error.message);
    }
};

// Get all insurance policies
const getAllPolicies = async () => {
    try {
        const policies = await InsurancePolicy.findAll();
        return policies;
    } catch (error) {
        throw new Error('Error fetching policies: ' + error.message);
    }
};

// Get a policy by ID
const getPolicyById = async (policyId) => {
    try {
        const policy = await InsurancePolicy.findByPk(policyId);
        if (!policy) {
            throw new Error('Policy not found');
        }
        return policy;
    } catch (error) {
        throw new Error('Error fetching policy: ' + error.message);
    }
};

// Update an insurance policy
const updatePolicy = async (policyId, updatedData) => {
    try {
        const [updated] = await InsurancePolicy.update(updatedData, {
            where: { id: policyId }
        });
        if (!updated) {
            throw new Error('Policy not found or no changes made');
        }
        return await getPolicyById(policyId);
    } catch (error) {
        throw new Error('Error updating policy: ' + error.message);
    }
};

// Delete an insurance policy
const deletePolicy = async (policyId) => {
    try {
        const deleted = await InsurancePolicy.destroy({
            where: { id: policyId }
        });
        if (!deleted) {
            throw new Error('Policy not found');
        }
        return { message: 'Policy deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting policy: ' + error.message);
    }
};

module.exports = {
    createPolicy,
    getAllPolicies,
    getPolicyById,
    updatePolicy,
    deletePolicy
};