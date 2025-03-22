import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaUser, FaFileAlt, FaCalendarAlt, FaDollarSign, FaCheck, FaTimes } from "react-icons/fa";

const RequestDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sampleData = {
      id: id,
      type: "PROPERTY",
      number: "PROP-56789",
      created_at: "2024-03-01",
      status: "Requested",
      estimated_value: 150000,
      appraiser: {
        name: "John Doe",
        experience: "03 YEARS",
        type: "Individual",
        notes: "good profile",
      },
    };

    setTimeout(() => {
      setRequest(sampleData);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleApprove = async () => {
    try {
      // Cập nhật trạng thái trong state
      setRequest((prevRequest) => ({
        ...prevRequest,
        status: "Approved", // Cập nhật trạng thái thành "Approved"
      }));
  
      // Gửi yêu cầu cập nhật trạng thái lên server (nếu có API)
      const response = await fetch(`/api/requests/${id}/approve`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Approved" }), // Gửi dữ liệu cập nhật
      });
  
      if (response.ok) {
        alert(`Request ${id} approved!`);
        navigate("/appraisers/request-list"); // Chuyển hướng sau khi cập nhật thành công
      } else {
        alert("Failed to approve the request.");
      }
    } catch (error) {
      console.error("Error approving request:", error);
      alert("An error occurred while approving the request.");
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!request) {
    return <p className="text-red-500 text-center">Request not found!</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <FaFileAlt /> Appraiser Request Detail
      </h2>
      <div className="flex flex-col">
        {/* General Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold border-b pb-2">GENERAL INFORMATION</h3>
          <div className="grid grid-cols-3 gap-4 text-gray-700 mt-4">
            <p><strong>Id:</strong> <span className="bg-gray-200 px-3 py-1 rounded block w-full">{request.id}</span></p>
            <p><strong>Type:</strong> <span className="bg-gray-200 px-3 py-1 rounded block w-full">{request.type}</span></p>
            <p><strong>Number:</strong> <span className="bg-gray-200 px-3 py-1 rounded block w-full">{request.number}</span></p>
            <p><strong><FaCalendarAlt className="inline-block mr-1" /> Created At:</strong> <span className="bg-gray-200 px-3 py-1 rounded block w-full">{request.created_at}</span></p>
            <p><strong>Status:</strong> <span className="bg-gray-200 px-3 py-1 rounded block w-full">{request.status}</span></p>
            <p><strong><FaDollarSign className="inline-block mr-1" /> Estimated Value:</strong> <span className="bg-gray-200 px-3 py-1 rounded block w-full">${request.estimated_value.toLocaleString()}</span></p>
          </div>
        </div>

        {/* Appraiser Assignment */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold border-b pb-2">APPRAISER ASSIGNMENT</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700 mt-4">
            <div>
              <p><strong><FaUser className="inline-block mr-1" /> Appraiser Name:</strong></p>
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">{request.appraiser.name}</span>
            </div>
            <div>
              <p><strong>Experience:</strong></p>
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">{request.appraiser.experience}</span>
            </div>
            <div>
              <p><strong>Type:</strong></p>
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">{request.appraiser.type}</span>
            </div>
            <div>
              <p><strong>Notes:</strong></p>
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">{request.appraiser.notes}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
          onClick={handleApprove}
        >
          <FaCheck /> Approve
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md flex items-center gap-2">
          <FaTimes /> Reject
        </button>
      </div>
    </div>
  );
};

export default RequestDetail;