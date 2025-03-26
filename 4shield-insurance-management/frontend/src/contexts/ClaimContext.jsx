/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect, useCallback } from "react";
import { fetchClaims } from "../services/claimService";

export const ClaimsContext = createContext();

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ClaimsProvider = ({ children }) => {
	const [claims, setClaims] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedClaim, setSelectedClaim] = useState(null);

	// ✅ Gọi API để lấy danh sách claims khi component mount
	useEffect(() => {
		const getClaims = async () => {
			setLoading(true);
			try {
				const data = await fetchClaims();
				setClaims(Array.isArray(data) ? data : []);
			} catch (error) {
				console.error("API Error:", error.message);
				setError(error.message);
				setClaims([]);
			} finally {
				setLoading(false);
			}
		};
		getClaims();
	}, []);

	// ✅ Thêm claim mới
	const addClaim = async (newClaim) => {
		try {
			const response = await fetch(`${API_BASE_URL}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newClaim),
			});
			if (!response.ok) throw new Error("Failed to add claim");
			const addedClaim = await response.json();
			setClaims((prevClaims) => [...prevClaims, addedClaim]);
		} catch (error) {
			console.error(error);
		}
	};

	// ✅ Cập nhật claim (Edit)
	const updateClaim = async (updatedClaim) => {
		try {
			const response = await fetch(`${API_BASE_URL}/claim/${updatedClaim.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(updatedClaim),
			});
			if (!response.ok) throw new Error("Failed to update claim");
			const updatedData = await response.json();

			// ✅ Cập nhật danh sách claims trong state
			setClaims((prevClaims) =>
				prevClaims.map((claim) =>
					claim.id === updatedData.id ? updatedData : claim
				)
			);
		} catch (error) {
			console.error(error);
		}
	};

	// ✅ Xóa claim trên FE (Không xóa trên DB)
	const deleteClaim = (claimId) => {
		setClaims((prevClaims) =>
			prevClaims.filter((claim) => claim.id !== claimId)
		);
	};

	// ✅ Lấy chi tiết claim theo ID
	const getClaimById = useCallback(
		(id) => claims.find((claim) => claim.id === id) || null,
		[claims]
	);

	// Hàm cập nhật trạng thái Claim
	const updateClaimStatus = (id, newStatus) => {
		setClaims((prevClaims) =>
			prevClaims.map((claim) =>
				claim.id === id ? { ...claim, status: newStatus } : claim
			)
		);
	};

	const getStatusPath = (status) => {
		if (status === "Requested") return "edit";
		if (status === "In Review") return "review";
		if (status === "Approved" || status === "Rejected") return "cancel";
		return "";
	};

	const value = {
		claims,
		loading,
		error,
		selectedClaim,
		setClaims,
		setLoading,
		setError,
		addClaim,
		updateClaim,
		deleteClaim,
		getClaimById,
		updateClaimStatus,
		setSelectedClaim,
		getStatusPath,
	};

	return (
		<ClaimsContext.Provider value={value}>{children}</ClaimsContext.Provider>
	);
};
export { ClaimsProvider };
