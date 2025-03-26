import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClaimStatus from "../../shared/Status/ClaimStatus";
import { ClaimsContext } from "../../contexts/ClaimContext";
import { fetchClaims } from "../../services/claimService";

const ClaimListPage = () => {
	const navigate = useNavigate();
	const { loading, error, setLoading, setError, setSelectedClaim} =
		useContext(ClaimsContext);
	const [claimsCustomer, setClaimsCustomer] = useState([]);

	/* Change value "customerId" and "policyId" to reloading ui */
	const customerId = 1001;
	const policyId = 1;

	// Gọi API để lấy danh sách claims
	const fetchClaimOfCustomer = async () => {
		setLoading(true);
		try {
			const data = await fetchClaims();
			const allClaim = data;

			// Lọc danh sách: Chỉ lấy những claims có "customer_id" và "policy_contraact_id" trùng với "customerId" và "policyId" hiện tại
			const filteredClaim = allClaim.filter(
				(claim) =>
					claim.customer_id === customerId &&
					claim.policy_contract_id === policyId
			);

			setClaimsCustomer(filteredClaim);
		} catch (err) {
			setError(err.message);
			setClaimsCustomer([]); // Nếu có lỗi, đảm bảo `claims` không bị `undefined`
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (customerId && policyId) {
			fetchClaimOfCustomer(customerId, policyId);
		}
	}, [customerId, policyId]);

	/* Check `claims` before `.map()` */
	if (loading) return <div className="text-gray-600">Loading claims...</div>;
	if (error) return <div className="text-red-600">Error: {error}</div>;
	if (!Array.isArray(claimsCustomer) || claimsCustomer.length === 0) {
		// console.error("Claims is not an array!", claims);
		return <div className="text-red-600">No claims available.</div>;
	}
	if (claimsCustomer.length === 0) {
		return (
			<div className="text-gray-600 text-lg font-semibold">
				No data to display
			</div>
		);
	}

	const handleClaimClick = (claim) => {
		setSelectedClaim(claim);
		navigate(`/user/claims/claims-status/list/${claim.id}`);
	};

	return (
		<>
			<div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-8">
				{claimsCustomer.map((claim) => (
					<div
						key={claim.id}
						className="bg-white shadow-md p-4 rounded-lg border"
					>
						<p>
							<strong>Claim ID:</strong>
							{claim?.id || "(Read-only)"}
						</p>
						<p>
							<strong>Policy Number:</strong>{" "}
							{claim?.policy_contract_id || "(Read-only)"}
						</p>
						<p>
							<strong>Claim Date:</strong> {claim?.claim_date || "(Read-only)"}
						</p>
						<p>
							<strong>Claim Type:</strong> {claim?.claim_type || "(Read-only)"}
						</p>
						<p>
							<strong>Claim Amount ($):</strong>{" "}
							{claim?.claim_amount || "(Read-only)"}
						</p>

						<p className="mt-3">
							<strong>Claim Status:</strong>
							<ClaimStatus status={claim?.status} />
						</p>

						<button
							onClick={() => handleClaimClick(claim)}
							className="mt-4 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
						>
							View Details
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default ClaimListPage;
