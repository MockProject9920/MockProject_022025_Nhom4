const StatusBadge = ({ status }) => {
	const statusColors = {
		Requested: "bg-yellow-500",
		"In Review": "bg-blue-500",
		Approved: "bg-green-500",
		Rejected: "bg-red-500",
		Cancelled: "bg-red-500",
		PENDING: "bg-yellow-500",
		SUCCESS: "bg-green-500",
		FAILED: "bg-gray-500",
	};

	return (
		<span
			className={`px-4 py-1 rounded-full text-center text-white w-[100px] block ${
				statusColors[status] || "bg-gray-200"
			}`}
		>
			{status}
		</span>
	);
};

export default StatusBadge;
