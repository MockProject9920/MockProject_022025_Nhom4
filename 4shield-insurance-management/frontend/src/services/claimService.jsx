/* Claim API */
import {
	deleteComplaint,
	getClaims,
	getClaimsDetail,
	putClaimStatus,
	requestClaim,
	getClaimsSettlement,
} from "../api/claimApi";

export const fetchClaims = async () => {
	try {
		const response = await getClaims();
		return response.data;
	} catch (error) {
		console.error("Error getting request list:", error);
		throw error;
	}
};
export const fetchClaimsSettlement = async () => {
	try {
		const response = await getClaimsSettlement();
		return response.data;
	} catch (error) {
		console.error("Error getting request list:", error);
		throw error;
	}
};

export const submitClaim = async (claimData) => {
	try {
		const response = await requestClaim(claimData);
		return response.data;
	} catch (error) {
		console.error("Error sending request:", error);
		throw error;
	}
};

export const fetchClaimDetails = async (claimId) => {
	try {
		const response = await getClaimsDetail(claimId);
		return response.data;
	} catch (error) {
		console.error("Error while retrieving request details:", error);
		throw error;
	}
};

export const updateClaimStatus = async (claimId, status) => {
	try {
		const response = await putClaimStatus(claimId, status);
		return response.data;
	} catch (error) {
		console.error("Error updating request status:", error);
		throw error;
	}
};

export const deleteClaim = async (claimId) => {
	try {
		await deleteComplaint(claimId);
		return { success: true };
	} catch (error) {
		console.error("Error while deleting request:", error);
		throw error;
	}
};
