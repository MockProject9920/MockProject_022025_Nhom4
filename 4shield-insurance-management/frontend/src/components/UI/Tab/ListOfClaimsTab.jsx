import React from "react";
import ClaimListPage from "../../../pages/Claims/ClaimListPage";

const ListOfClaimsTab = () => {
	return (
		<div className="container mx-auto p-6 bg-gray-50 min-h-screen">
			<div className="rounded-lg shadow-sm">
				<h1 className="text-3xl font-bold text-gray-800">View Claim Request</h1>
				<p className="mb-4 text-gray-600">
					Display a list of all Insurance claims
				</p>
				<ClaimListPage />
			</div>
		</div>
	);
};

export default ListOfClaimsTab;
