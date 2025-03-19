/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const claims = [
	{
		id: "C001",
		policyNumber: "P123456",
		date: "2025-03-10",
		type: "Auto Insurance",
		amount: "5,000",
		status: "Requested",
	},
	{
		id: "C002",
		policyNumber: "P654321",
		date: "2025-03-08",
		type: "Home Insurance",
		amount: "12,000",
		status: "In Review",
	},
	{
		id: "C003",
		policyNumber: "P987654",
		date: "2025-03-06",
		type: "Health Insurance",
		amount: "2,500",
		status: "Approved",
	},
	{
		id: "C004",
		policyNumber: "P777888",
		date: "2025-03-02",
		type: "Travel Insurance",
		amount: "800",
		status: "Rejected",
	},
];

/* Define color for each state */
const statusColors = {
	Requested: "bg-yellow-500",
	"In Review": "bg-blue-500",
	Approved: "bg-green-500",
	Rejected: "bg-red-500",
};

const ListOfClaimsTab = () => {
	const navigate = useNavigate();

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
								<div>
									<span className="font-bold">Claim ID: </span>
									<span className="text-gray-700 text-base">
										{claim.id || "(Read-only)"}
									</span>
								</div>

								<div>
									<span className="font-bold">Policy Number: </span>
									<span className="text-gray-700 text-base">
										{claim.policyNumber || "(Read-only)"}
									</span>
								</div>
								<div>
									<span className="font-bold">Claim Date: </span>
									<span className="text-gray-700 text-base">
										{claim.date || "(Read-only)"}
									</span>
								</div>
								<div>
									<span className="font-bold">Claim Type: </span>
									<span className="text-gray-700 text-base">
										{claim.type || "(Read-only)"}
									</span>
								</div>
								<div>
									<span className="font-bold">Claim Amount ($): </span>
									<span className="text-gray-700 text-base">
										{claim.amount || "(Read-only)"}
									</span>
								</div>
								<div>
									<span className="font-bold">Claim Status: </span>
								</div>

								<div className="grid grid-cols-1 gap-2 mt-3 sm:grid-cols-2 lg:grid-cols-2  xl:grid-cols-4 xl:gap-2">
									{["Requested", "In Review", "Approved", "Rejected"].map(
										(status) => (
											<div key={status} className="inline-flex justify-start">
												<div
													className={`w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center ${
														claim.status === status
															? statusColors[status]
															: "bg-gray-200"
													}`}
												>
													{claim.status === status && (
														<div className="w-2.5 h-2.5rounded-full"></div>
													)}
												</div>
												<span className="ml-2 text-sm">{status}</span>
											</div>
										)
									)}
								</div>
								<button
									onClick={() =>
										navigate(`/user/claims/claim-details/${claim.id}`)
									}
									className="mt-6 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
								>
									Claim Details
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
