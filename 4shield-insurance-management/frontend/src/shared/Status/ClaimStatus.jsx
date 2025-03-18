/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ClaimStatus = ({ status }) => {
	let statusColor;
	switch (status) {
		case "pending":
			statusColor = "text-yellow-500";
			break;
		case "approved":
			statusColor = "text-green-500";
			break;
		case "rejected":
			statusColor = "text-red-500";
			break;
		default:
			statusColor = "text-gray-500";
	}

	return (
		<div className="p-4">
			<span className={`font-bold ${statusColor}`}>Status: {status}</span>
		</div>
	);
};

export default ClaimStatus;
