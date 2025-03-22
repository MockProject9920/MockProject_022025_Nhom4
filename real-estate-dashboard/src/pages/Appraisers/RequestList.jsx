import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FaCheck, FaTimes } from "react-icons/fa";
import axios from "axios";

const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [editingRequest, setEditingRequest] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isNewRequestModalOpen, setIsNewRequestModalOpen] = useState(false);
  const [newRequest, setNewRequest] = useState({
    number: "",
    client: "",
    value: "",
    createdAt: new Date().toLocaleString(),
    assignedTo: "",
    status: "Requested",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8890/appraiser/request-list");
        setRequests(response.data.data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  const handleEditClick = (request) => {
    setEditingRequest(request.id);
    setEditedData({ ...request });
  };

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
  };

  const handleSaveEdit = () => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === editingRequest ? { ...req, ...editedData } : req
      )
    );
    setEditingRequest(null);
  };

  const handleChangeEdit = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa request này không?")) {
      setRequests((prevRequests) =>
        prevRequests.filter((req) => req.id !== id)
      );
    }
  };

  const handleNewRequestClick = () => {
    setIsNewRequestModalOpen(true);
  };

  const handleNewRequestInputChange = (e, field) => {
    setNewRequest({ ...newRequest, [field]: e.target.value });
  };

  const handleSaveNewRequest = async () => {
    try {
      const response = await axios.post("http://localhost:8890/appraiser/new-request", newRequest);
      setRequests([...requests, response.data.data]);
      setIsNewRequestModalOpen(false);
      setNewRequest({
        number: "",
        client: "",
        value: "",
        createdAt: new Date().toLocaleString(),
        assignedTo: "",
        status: "Requested",
      });
    } catch (error) {
      console.error("Error saving new request:", error);
    }
  };

  // Phân trang
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(requests.length / itemsPerPage);

  const paginatedRequests = requests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold ml-5">⭐ Appraiser Request List</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mr-5 flex items-center"
          onClick={handleNewRequestClick}
        >
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
                {editingRequest === req.id ? (
                  <>
                    <td className="p-2">{req.id}</td>
                    <td>
                      <input
                        type="text"
                        name="number"
                        value={editedData.number}
                        onChange={handleChangeEdit}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="client"
                        value={editedData.client}
                        onChange={handleChangeEdit}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="value"
                        value={editedData.value}
                        onChange={handleChangeEdit}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td>{req.createdAt}</td>
                    <td>
                      <input
                        type="text"
                        name="assignedTo"
                        value={editedData.assignedTo}
                        onChange={handleChangeEdit}
                        className="border p-1 rounded"
                      />
                    </td>
                    <td>
                      <select
                        name="status"
                        value={editedData.status}
                        onChange={handleChangeEdit}
                        className="border p-1 rounded"
                      >
                        <option value="Requested">Requested</option>
                        <option value="Assigned">Assigned</option>
                        <option value="Declined">Declined</option>
                      </select>
                    </td>
                    <td className="flex gap-2">
                      <button
                        className="text-green-500"
                        onClick={handleSaveEdit}
                      >
                        <FaCheck size={18} />
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => setEditingRequest(null)}
                      >
                        <FaTimes size={18} />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-2">{req.id}</td>
                    <td>{req.number}</td>
                    <td>{req.client}</td>
                    <td>{req.value}</td>
                    <td>{req.createdAt}</td>
                    <td>{req.assignedTo}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getStatusClass(
                          req.status
                        )}`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 flex space-x-2">
                      <button
                        className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={() => handleViewDetails(req)}
                      >
                        <AiOutlineEye size={16} />
                      </button>
                      <button
                        className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => handleEditClick(req)}
                      >
                        <AiOutlineEdit size={16} />
                      </button>
                      <button
                        className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => handleDelete(req.id)}
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
          {Math.min(currentPage * itemsPerPage, requests.length)} of {requests.length}{" "}
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
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedRequest(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">Request Details</h2>
            <div className="space-y-2">
              <p><strong>ID:</strong> {selectedRequest.id}</p>
              <p><strong>Number:</strong> {selectedRequest.number}</p>
              <p><strong>Client Name:</strong> {selectedRequest.client}</p>
              <p><strong>Estimated Value:</strong> {selectedRequest.value}</p>
              <p><strong>Created At:</strong> {selectedRequest.createdAt}</p>
              <p><strong>Assigned To:</strong> {selectedRequest.assignedTo}</p>
              <p><strong>Status:</strong> {selectedRequest.status}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal tạo request mới */}
      {isNewRequestModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsNewRequestModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">Create New Request</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Number</label>
                <input
                  type="text"
                  value={newRequest.number}
                  onChange={(e) => handleNewRequestInputChange(e, "number")}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Client Name</label>
                <input
                  type="text"
                  value={newRequest.client}
                  onChange={(e) => handleNewRequestInputChange(e, "client")}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Estimated Value</label>
                <input
                  type="text"
                  value={newRequest.value}
                  onChange={(e) => handleNewRequestInputChange(e, "value")}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Assigned To</label>
                <input
                  type="text"
                  value={newRequest.assignedTo}
                  onChange={(e) => handleNewRequestInputChange(e, "assignedTo")}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={newRequest.status}
                  onChange={(e) => handleNewRequestInputChange(e, "status")}
                  className="border p-2 rounded w-full"
                >
                  <option value="Requested">Requested</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Declined">Declined</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setIsNewRequestModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={handleSaveNewRequest}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestList;