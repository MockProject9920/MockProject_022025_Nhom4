import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";

const RequestDetail = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sampleData = {
      id: "001",
      type: "PROPERTY",
      number: "PROP-56789",
      created_at: "2024-03-01",
      status: "REQUESTED",
      estimated_value: 150000,
      appraiser: {
        name: "John Doe",
        experience: "03 YEARS",
        type: "Individual",
        notes: "good profile",
      },
    };

    // Giả lập API với setTimeout()
    setTimeout(() => {
      setRequest(sampleData);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!request) {
    return <p className="text-red-500 text-center">Request not found!</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6">
        📄 Appraiser Request Detail
      </h2>

      <div className="flex flex-col">
        {/* General Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold border-b pb-2">
            GENERAL INFORMATION
          </h3>
          <div className="grid grid-cols-3 gap-4 text-gray-700 mt-4">
            <p>
              <strong>Id:</strong>{" "}
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">
                {request.id}
              </span>
            </p>
            <p>
              <strong>Type:</strong>{" "}
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">
                {request.type}
              </span>
            </p>
            <p>
              <strong>Number:</strong>{" "}
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">
                {request.number}
              </span>
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">
                {request.created_at}
              </span>
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">
                {request.status}
              </span>
            </p>
            <p>
              <strong>Amount / Estimated Value:</strong>{" "}
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">
                ${request.estimated_value.toLocaleString()}
              </span>
            </p>
          </div>
        </div>

        {/* Appraiser Assignment */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold border-b pb-2">
            APPRAISER ASSIGNMENT
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700 mt-4">
            <div>
              <p>
                <strong>Appraiser Name:</strong>
              </p>
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">
                {request.appraiser.name}
              </span>
            </div>
            <div>
              <p>
                <strong>Appraiser Experience:</strong>
              </p>
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">
                {request.appraiser.experience}
              </span>
            </div>
            <div>
              <p>
                <strong>Appraiser Type:</strong>
              </p>
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">
                {request.appraiser.type}
              </span>
            </div>
            <div>
              <p>
                <strong>Notes:</strong>
              </p>
              <span className="bg-gray-200 px-3 py-1 rounded block w-full">
                {request.appraiser.notes}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
          ✅ Approve
        </Button>
        <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
          ❌ Reject
        </Button>
      </div>
    </div>
  );
};

export default RequestDetail;
