import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AiOutlineEye,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlinePlus,
} from "react-icons/ai";

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

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

const AppraiserReportList = () => {
  const [reports, setReports] = useState([]);
  const [editingReport, setEditingReport] = useState(null);
  const [editValues, setEditValues] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isNewReportModalOpen, setIsNewReportModalOpen] = useState(false);
  const [newReport, setNewReport] = useState({
    requestId: "",
    number: "",
    appraiserValue: "",
    factors: "",
    date: "",
    status: "Requested",
  });

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://localhost:8890/appraiser/appraisal-report-list?status=PENDING&page=0&size=10&sortBy=appraisalDate");
        const data = response.data.data.content; // Adjusted to access the content array
        // Ensure data is an array
        setReports(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  // Phân trang
  const itemsPerPage = 3; // Số lượng item trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const totalPages = Math.ceil(reports.length / itemsPerPage); // Tổng số trang

  // Lấy dữ liệu theo trang hiện tại
  const paginatedReports = reports.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEditClick = (report) => {
    setEditingReport(report.id);
    setEditValues({ ...report });
  };

  const handleInputChange = (e, field) => {
    setEditValues({ ...editValues, [field]: e.target.value });
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:8890/appraiser/reports/${editingReport}`, editValues);
      setReports(reports.map((r) => (r.id === editingReport ? response.data.data : r)));
      setEditingReport(null);
    } catch (error) {
      console.error("Error saving report:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingReport(null);
  };

  const handleDeleteReport = async (id) => {
    if (window.confirm("Are you sure you want to delete this report?")) {
      try {
        await axios.delete(`http://localhost:8890/appraiser/reports/${id}`);
        setReports(reports.filter((report) => report.id !== id));
      } catch (error) {
        console.error("Error deleting report:", error);
      }
    }
  };

  const handleViewReport = (report) => {
    setSelectedRequest(report);
    setIsModalOpen(true);
  };

  const handleNewReportClick = () => {
    setIsNewReportModalOpen(true);
  };

  const handleNewReportInputChange = (e, field) => {
    setNewReport({ ...newReport, [field]: e.target.value });
  };

  const handleSaveNewReport = async () => {
    try {
      const response = await axios.post("http://localhost:8890/appraiser/reports", newReport);
      setReports([...reports, response.data.data]);
      setIsNewReportModalOpen(false);
      setNewReport({
        requestId: "",
        number: "",
        appraiserValue: "",
        factors: "",
        date: "",
        status: "Requested",
      });
    } catch (error) {
      console.error("Error saving new report:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          ⭐Appraiser Assessment Report List
        </h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 flex items-center rounded-lg shadow-md hover:bg-blue-600"
          onClick={handleNewReportClick}
        >
          <AiOutlinePlus size={18} className="mr-2" /> New Report
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
                "Factors",
                "Date",
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
                {editingReport === report.id ? (
                  <>
                    <td className="px-4 py-2">{report.id}</td>
                    <td className="px-4 py-2">{report.requestId}</td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={editValues.number}
                        onChange={(e) => handleInputChange(e, "number")}
                        className="border p-1 rounded w-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={editValues.appraiserValue}
                        onChange={(e) => handleInputChange(e, "appraiserValue")}
                        className="border p-1 rounded w-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={editValues.factors}
                        onChange={(e) => handleInputChange(e, "factors")}
                        className="border p-1 rounded w-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={editValues.date}
                        onChange={(e) => handleInputChange(e, "date")}
                        className="border p-1 rounded w-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <select
                        value={editValues.status}
                        onChange={(e) => handleInputChange(e, "status")}
                        className="border p-1 rounded w-full"
                      >
                        <option value="Requested">Requested</option>
                        <option value="Approved">Approved</option>
                        <option value="Declined">Declined</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 flex gap-2">
                      <button
                        className="text-green-500"
                        onClick={handleSaveEdit}
                      >
                        <AiOutlineCheck size={18} />
                      </button>
                      <button
                        className="text-red-500"
                        onClick={handleCancelEdit}
                      >
                        <AiOutlineClose size={18} />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
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
                      <button
                        className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={() => handleViewReport(report)}
                      >
                        <AiOutlineEye size={16} />
                      </button>
                      <button
                        className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => handleEditClick(report)}
                      >
                        <AiOutlineEdit size={16} />
                      </button>
                      <button
                        className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => handleDeleteReport(report.id)}
                      >
                        <AiOutlineDelete size={16} />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phân trang */}
      <div className="flex justify-between mt-4 text-gray-600">
        <span>
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, reports.length)} of {reports.length}{" "}
          entries
        </span>
        <div>
          <button
            className={`px-3 py-1 border rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
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
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#d8e1fe] hover:bg-[#b6c3fc]"
            } ml-2`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal xem chi tiết */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedRequest && (
          <div>
            <h2 className="text-xl font-bold mb-4">Report Details</h2>
            <div className="space-y-2">
              <p><strong>ID:</strong> {selectedRequest.id}</p>
              <p><strong>Request ID:</strong> {selectedRequest.requestId}</p>
              <p><strong>Number:</strong> {selectedRequest.number}</p>
              <p><strong>Appraiser Value:</strong> {selectedRequest.appraiserValue}</p>
              <p><strong>Factors:</strong> {selectedRequest.factors}</p>
              <p><strong>Date:</strong> {selectedRequest.date}</p>
              <p><strong>Status:</strong> {selectedRequest.status}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal tạo request mới */}
      <Modal isOpen={isNewReportModalOpen} onClose={() => setIsNewReportModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Create New Report</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Request ID</label>
            <input
              type="text"
              value={newReport.requestId}
              onChange={(e) => handleNewReportInputChange(e, "requestId")}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Number</label>
            <input
              type="text"
              value={newReport.number}
              onChange={(e) => handleNewReportInputChange(e, "number")}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Appraiser Value</label>
            <input
              type="text"
              value={newReport.appraiserValue}
              onChange={(e) => handleNewReportInputChange(e, "appraiserValue")}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Factors</label>
            <input
              type="text"
              value={newReport.factors}
              onChange={(e) => handleNewReportInputChange(e, "factors")}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="text"
              value={newReport.date}
              onChange={(e) => handleNewReportInputChange(e, "date")}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={newReport.status}
              onChange={(e) => handleNewReportInputChange(e, "status")}
              className="border p-2 rounded w-full"
            >
              <option value="Requested">Requested</option>
              <option value="Approved">Approved</option>
              <option value="Declined">Declined</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => setIsNewReportModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSaveNewReport}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AppraiserReportList;