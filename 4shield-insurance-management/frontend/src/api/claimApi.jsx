/* Insurance claim processing API */
import api from "../config/apiConfig";

export const getClaims = async () => {
	return await api.get("/claim");
};
export const getClaimsSettlement = async () => {
	return await api.get("/transactions");
};

export const getClaimsPage = async (page) => {
	return await api.get(`/claim?page=${page}`);
};

export const getClaimsDetail = async (claimId) => {
	return await api.get(`/claim/${claimId}`);
};

export const putClaimStatus = async (claimId, status) => {
	return api.put(`/claim/${claimId}`, { status });
};

export const deleteComplaint = async (claimId) => {
	return await api.delete(`/claim/${claimId}`);
};

export const requestClaim = async (claimData) => {
	return await api.post("/claim", claimData);
};

export const approveClaim = async (claimId) => {
	return await api.post(`/claim/${claimId}/approve`);
};
