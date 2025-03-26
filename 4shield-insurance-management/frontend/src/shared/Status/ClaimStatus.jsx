/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ClaimStatus = ({ status }) => {
	let statusColor;
	switch (status) {
		case "Requested":
			statusColor = "bg-yellow-500";
			break;
		case "In Review":
			statusColor = "bg-blue-500";
			break;
		case "Approved":
			statusColor = "bg-green-500";
			break;
		case "Rejected":
			statusColor = "bg-red-500";
			break;
		case "Cancelled":
			statusColor = "bg-red-500";
			break;
		case "PENDING":
			statusColor = "bg-yellow-500";
			break;
		case "SUCCESS":
			statusColor = "bg-green-500";
			break;
		case "FAILED":
			statusColor = "bg-gray-500";
			break;
	}

	return (
		<span
			className={`ml-2 px-3 py-1 text-white rounded-full ${
				statusColor || "bg-gray-500"
			}`}
		>
			{status || "No Status"}
		</span>
	);
};

export default ClaimStatus;
