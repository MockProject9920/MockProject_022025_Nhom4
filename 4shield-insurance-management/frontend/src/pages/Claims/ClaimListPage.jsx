/* eslint-disable no-unused-vars */
import React from "react";

const claims = [
	{
		id: "C001",
		policyNumber: "P123456",
		date: "2025-03-10",
		type: "Auto Insurance",
		amount: "$5,000",
		status: "Requested",
	},
	{
		id: "C002",
		policyNumber: "P654321",
		date: "2025-03-08",
		type: "Home Insurance",
		amount: "$12,000",
		status: "In Review",
	},
	{
		id: "C003",
		policyNumber: "P987654",
		date: "2025-03-06",
		type: "Health Insurance",
		amount: "$2,500",
		status: "Approved",
	},
	{
		id: "C004",
		policyNumber: "P777888",
		date: "2025-03-02",
		type: "Travel Insurance",
		amount: "$800",
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

const ClaimListPage = () => {
	return (
		<div className="max-w-4xl mx-auto p-6 border border-gray-200 rounded-lg shadow-sm">
			<h1 className="text-2xl font-semibold mb-4">Claim Requests</h1>
			<div className="space-y-4">
				{claims.map((claim) => (
					<div
						key={claim.id}
						className="bg-white shadow-md p-4 rounded-lg border"
					>
						<div>
							<span className="text-lg font-semibold">Claim ID:</span>
							<span className="ml-3">{claim.id}</span>
						</div>
						<div>
							<span className="text-lg font-semibold">Policy Number:</span>
							<span className="ml-3">{claim.policyNumber}</span>
						</div>
						<div>
							<span className="text-lg font-semibold">Claim Date:</span>
							<span className="ml-3">{claim.date}</span>
						</div>
						<div>
							<span className="text-lg font-semibold">Claim Type:</span>
							<span className="ml-3">{claim.type}</span>
						</div>
						<div>
							<span className="text-lg font-semibold">Claim Amount:</span>
							<span className="ml-3">{claim.amount}</span>
						</div>
						<div className="flex space-x-2">
							<span className="text-lg font-semibold">Claim Status:</span>
							<div className="flex space-x-4 mt-1">
								{["Requested", "In Review", "Approved", "Rejected"].map(
									(status) => (
										<label key={status} className="inline-flex items-center">
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
										</label>
									)
								)}
							</div>
						</div>
						<button className="mt-3 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
							Claim Details
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ClaimListPage;
