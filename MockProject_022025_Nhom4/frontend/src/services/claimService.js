// filepath: /MockProject_022025_Nhom4/frontend/src/services/claimService.js

import axios from 'axios';
import { API_URL } from '../utils/constants';

const claimService = {
    getClaims: async () => {
        const response = await axios.get(`${API_URL}/claims`);
        return response.data;
    },

    getClaimById: async (claimId) => {
        const response = await axios.get(`${API_URL}/claims/${claimId}`);
        return response.data;
    },

    createClaim: async (claimData) => {
        const response = await axios.post(`${API_URL}/claims`, claimData);
        return response.data;
    },

    updateClaim: async (claimId, claimData) => {
        const response = await axios.put(`${API_URL}/claims/${claimId}`, claimData);
        return response.data;
    },

    deleteClaim: async (claimId) => {
        const response = await axios.delete(`${API_URL}/claims/${claimId}`);
        return response.data;
    }
};

export default claimService;