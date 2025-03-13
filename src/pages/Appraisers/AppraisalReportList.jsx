import React, { useState } from "react";
import { Eye, Edit, Trash2, Plus } from "lucide-react";

const reports = [
  {
    id: 1,
    requestId: 11,
    number: "CON001",
    appraiserValue: "$190,000",
    factors: "Near the coast, high flood risk.",
    date: "2024-03-06 10:00 AM",
    status: "Requested",
  },
  {
    id: 2,
    requestId: 12,
    number: "PRO001",
    appraiserValue: "$90,000",
    factors: "1,800 sqft, 3-bedroom house. Newly built, good quality.",
    date: "2024-05-06 09:30 AM",
    status: "Approved",
  },
  {
    id: 3,
    requestId: 13,
    number: "CON002",
    appraiserValue: "$10,000",
    factors: "Near the coast, high flood risk.",
    date: "2025-03-06 02:00 PM",
    status: "Declined",
  },
  {
    id: 4,
    requestId: 14,
    number: "REQ003",
    appraiserValue: "$250,000",
    factors: "Luxury apartment, city view.",
    date: "2025-04-10 01:30 PM",
    status: "Approved",
  },
  {
    id: 5,
    requestId: 15,
    number: "REQ004",
    appraiserValue: "$120,000",
    factors: "Suburban area, good neighborhood.",
    date: "2025-06-21 08:15 AM",
    status: "Requested",
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case "Requested":
      return "bg-yellow-500 text-white";
    case "Approved":
      return "bg-blue-500 text-white";
    case "Declined":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-300 text-black";
  }
};

const AppraiserReportList = () => {
  // Quản lý phân trang
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(reports.length / itemsPerPage);

  // Lọc dữ liệu theo trang hiện tại
  const paginatedReports = reports.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          Appraiser Assessment Report List
        </h2>
        <button className="bg-blue-500 text-white px-4 py-2 flex items-center rounded-lg shadow-md hover:bg-blue-600">
          <Plus size={18} className="mr-2" /> New Report
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              {[
                "ID",
                "Request ID",
                "Number",
                "Appraiser Value",
                "Appraiser Factors",
                "Assessment Date",
                "Status",
                "Action",
              ].map((header) => (
                <th key={header} className="px-4 py-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedReports.map((report) => (
              <tr key={report.id} className="border-b">
                <td className="px-4 py-2">{report.id}</td>
                <td className="px-4 py-2">{report.requestId}</td>
                <td className="px-4 py-2">{report.number}</td>
                <td className="px-4 py-2">{report.appraiserValue}</td>
                <td className="px-4 py-2">{report.factors}</td>
                <td className="px-4 py-2">{report.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadge(
                      report.status
                    )}`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex space-x-2">
                  <button className="p-1 bg-green-500 text-white rounded hover:bg-green-600">
                    <Eye size={16} />
                  </button>
                  <button className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <Edit size={16} />
                  </button>
                  <button className="p-1 bg-red-500 text-white rounded hover:bg-red-600">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phân trang */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, reports.length)} of{" "}
          {reports.length} entries
        </p>
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
  );
};

export default AppraiserReportList;
