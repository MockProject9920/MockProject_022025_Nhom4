// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/services/claimService.js

const { Claim } = require('../models/Claim');
const { User } = require('../models/User');
const { InsurancePolicy } = require('../models/InsurancePolicy');

class ClaimService {
    async createClaim(userId, claimData) {
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                throw new Error('User not found');
            }

            const claim = await Claim.create({
                ...claimData,
                userId: user.id,
            });

            return claim;
        } catch (error) {
            throw new Error(`Error creating claim: ${error.message}`);
        }
    }

    async getClaimsByUser(userId) {
        try {
            const claims = await Claim.findAll({
                where: { userId },
            });
            return claims;
        } catch (error) {
            throw new Error(`Error fetching claims: ${error.message}`);
        }
    }

    async getClaimById(claimId) {
        try {
            const claim = await Claim.findByPk(claimId);
            if (!claim) {
                throw new Error('Claim not found');
            }
            return claim;
        } catch (error) {
            throw new Error(`Error fetching claim: ${error.message}`);
        }
    }

    async updateClaim(claimId, updateData) {
        try {
            const claim = await Claim.findByPk(claimId);
            if (!claim) {
                throw new Error('Claim not found');
            }

            await claim.update(updateData);
            return claim;
        } catch (error) {
            throw new Error(`Error updating claim: ${error.message}`);
        }
    }

    async deleteClaim(claimId) {
        try {
            const claim = await Claim.findByPk(claimId);
            if (!claim) {
                throw new Error('Claim not found');
            }

            await claim.destroy();
            return { message: 'Claim deleted successfully' };
        } catch (error) {
            throw new Error(`Error deleting claim: ${error.message}`);
        }
    }
}

module.exports = new ClaimService();