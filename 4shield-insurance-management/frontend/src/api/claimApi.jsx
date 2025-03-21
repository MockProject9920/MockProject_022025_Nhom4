/* Insurance claim processing API */
import api from "../config/apiConfig";

export const getClaims = async () => {
	return await api.get("/api/claims");
};

export const getClaimsPage = async (page) => {
	return await api.get(`/api/claims?page=${page}`);
};

export const getClaimsDetail = async (claimId) => {
	return await api.get(`/api/claims/${claimId}`);
};


export const getClaimsRequestDetail = async () => {
    // return await api.get(`/api/claim`);
    return await api.get(`/claim`);
};


export const putClaimStatus = async (claimId, status) => {
	return api.put(`/api/claims/${claimId}`, { status });
};

export const deleteComplaint = async (claimId) => {
	return await api.delete(`/api/claims/${claimId}`);
};

export const requestClaim = async (claimData) => {
	return await api.post("/api/claims", claimData);
};

export const approveClaim = async (claimId) => {
	return await api.post(`/api/claims/${claimId}/approve`);
};
