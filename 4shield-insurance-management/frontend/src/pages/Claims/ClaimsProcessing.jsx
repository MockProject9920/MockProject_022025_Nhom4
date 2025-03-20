/* eslint-disable no-unused-vars */
import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import ClaimsProcessingTable from "../../components/UI/Table/ClaimsProcessingTable";

const ClaimsProcessing = () => {
	return (
		<AdminLayout>
			<div className="p-4">
				<h2 className="text-2xl font-semibold mb-4">Claims Processing</h2>
				<div className="bg-white p-4 rounded-lg shadow-md">
					<ClaimsProcessingTable />
				</div>
			</div>
		</AdminLayout>
	);
};

export default ClaimsProcessing;
