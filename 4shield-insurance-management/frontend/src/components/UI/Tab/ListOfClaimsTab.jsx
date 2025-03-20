import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ClaimsContext } from "../../../contexts/ClaimContext"; // ✅ Import Context

const ListOfClaimsTab = () => {
	const navigate = useNavigate();
	const { claims, statusColors } = useContext(ClaimsContext); // ✅ Lấy dữ liệu từ Context

	const handleClaimClick = (claim) => {
		if (claim.status === "Requested") {
			navigate(`/user/claims/claims-status/edit/${claim.id}`);
		} else if (claim.status === "In Review") {
			navigate(`/user/claims/claims-status/review/${claim.id}`);
		} else if (claim.status === "Approved" || claim.status === "Rejected") {
			navigate(`/user/claims/claims-status/cancel/${claim.id}`);
		}
	};

	return (
		<div className="container mx-auto p-6 bg-gray-50 min-h-screen">
			<div className="rounded-lg shadow-sm">
				<h1 className="text-3xl font-bold text-gray-800">View Claim Request</h1>
				<p className="mb-4 text-gray-600">
					Display a list of all Insurance claims
				</p>
				{claims.length == 0 ? (
					<div className="text-gray-600 text-lg font-semibold">
						No data to display
					</div>
				) : (
					<div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-8">
						{claims.map((claim) => (
							<div
								key={claim.id}
								className="bg-white shadow-md p-4 rounded-lg border"
							>
								<p>
									<strong>Claim ID:</strong>
									{claim.id || "(Read-only)"}
								</p>
								<p>
									<strong>Policy Number:</strong>{" "}
									{claim.policyNumber || "(Read-only)"}
								</p>
								<p>
									<strong>Claim Date:</strong> {claim.date || "(Read-only)"}
								</p>
								<p>
									<strong>Claim Type:</strong> {claim.type || "(Read-only)"}
								</p>
								<p>
									<strong>Claim Amount ($):</strong>{" "}
									{claim.amount || "(Read-only)"}
								</p>

								<p className="mt-3">
									<strong>Claim Status:</strong>
									<span
										className={`ml-2 px-3 py-1 text-white rounded-full ${
											statusColors[claim.status || ""]
										}`}
									>
										{claim.status || "(Read-only)"}
									</span>
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
				)}
			</div>
		</div>
	);
};

export default ListOfClaimsTab;
