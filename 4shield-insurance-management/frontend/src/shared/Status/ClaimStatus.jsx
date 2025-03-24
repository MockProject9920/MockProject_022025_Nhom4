/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ClaimStatus = ({ status }) => {
	let statusColor;
	switch (status) {
		case "Requested":
			statusColor = "bg-yellow-500";
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
		case "Pending":
			statusColor = "bg-yellow-500";
			break;
		case "Success":
			statusColor = "bg-green-500";
			break;
		case "Failed":
			statusColor = "bg-gray-500";
			break;
		default:
			return "bg-gray-200"; // Màu mặc định nếu không khớp trạng thái nào
	}

	return (
		<div className="p-4">
			<span
				className={`px-4 py-1 rounded-full text-center text-white w-[100px] block font-bold ${statusColor}`}
			>
				{status}
			</span>
		</div>
	);
};

export default ClaimStatus;
