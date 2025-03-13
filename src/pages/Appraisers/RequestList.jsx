import { useState } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";

const RequestList = () => {
  const [requests, setRequests] = useState([
    { id: 1, number: "CON001", client: "ABC Corp", value: "$150,000", createdAt: "2024-03-06 10:00 AM", assignedTo: "John Doe", status: "Requested" },
    { id: 2, number: "PRO001", client: "Adam Conor", value: "$90,000", createdAt: "2024-05-06 09:30 AM", assignedTo: "John Doe", status: "Assigned" },
    { id: 3, number: "CLA001", client: "DEF Inc", value: "$120,000", createdAt: "2025-03-06 02:00 PM", assignedTo: "Jane Smith", status: "Declined" },
    { id: 4, number: "REQ004", client: "XYZ Ltd", value: "$200,000", createdAt: "2025-01-15 11:45 AM", assignedTo: "Alice Johnson", status: "Assigned" },
    { id: 5, number: "REQ005", client: "Global Solutions", value: "$300,000", createdAt: "2025-02-20 09:00 AM", assignedTo: "Michael Brown", status: "Requested" },
  ]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Requested":
        return "bg-yellow-400 text-black";
      case "Assigned":
        return "bg-blue-400 text-white";
      case "Declined":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  // Phân trang
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(requests.length / itemsPerPage);

  // Lấy dữ liệu theo trang
  const paginatedRequests = requests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold ml-5">⭐ Appraiser Request List</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mr-5 flex items-center">
          ➕ New Request
        </button>
      </div>

      <div className="mt-4 bg-white shadow-md rounded-lg p-4">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">ID</th>
              <th>Number</th>
              <th>Client Name</th>
              <th>Est. Value</th>
              <th>Created At</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRequests.map((req) => (
              <tr key={req.id} className="border-b">
                <td className="p-2">{req.id}</td>
                <td>{req.number}</td>
                <td>{req.client}</td>
                <td>{req.value}</td>
                <td>{req.createdAt}</td>
                <td>{req.assignedTo}</td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusClass(req.status)}`}>
                    {req.status}
                  </span>
                </td>
                <td className="flex gap-2 ">
                  <button className="text-green-500">
                    <Eye size={18} />
                  </button>
                  <button className="text-blue-500">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-500">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Phân trang */}
        <div className="flex justify-between mt-4 text-gray-600">
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, requests.length)} of {requests.length} entries
          </span>
          <div>
          <button
            className={`px-3 py-1 border rounded ${
              currentPage === 1
                ? "bg-gray-300"
                : "bg-[#d8e1fe] hover:bg-[#b6c3fc]"
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className={`px-3 py-1 border rounded ${
              currentPage === totalPages
                ? "bg-gray-300"
                : "bg-[#d8e1fe] hover:bg-[#b6c3fc]"
            } ml-2`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RequestList;
