const StatusBadge = ({ status }) => {
    const statusColors = {
        "Requested": "bg-yellow-500",
        "In Review": "bg-blue-500",
        "Approved": "bg-green-500",
        "Reject": "bg-red-500"
    };

    return (
        <span className={`px-4 py-1 rounded-full text-center text-white w-[100px] block ${statusColors[status] || "bg-gray-500"}`}>
            {status}
        </span>
    );
};

export default StatusBadge;
