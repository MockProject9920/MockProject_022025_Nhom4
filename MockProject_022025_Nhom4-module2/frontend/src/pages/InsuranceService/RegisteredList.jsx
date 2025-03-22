import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function RegisteredList() {
  const navigate = useNavigate();

  const contracts = [
    {
      contractCode: "H00001",
      registrationDate: "0703020252",
      entryDate: "0703020252",
      property: "450 Park Ave, CA",
      insurancePassage: "Home",
      status: "Pending",
      notice: "Under Review",
    },
    {
      contractCode: "H00002",
      registrationDate: "0703020252",
      entryDate: "0703020252",
      property: "450 Park Ave, CA",
      insurancePassage: "Home",
      status: "Approved",
      notice: "Contract Animated",
    },
    {
      contractCode: "H00003",
      registrationDate: "0703020252",
      entryDate: "0703020252",
      property: "798 Barrett Blvd., FL",
      insurancePassage: "Home",
      status: "Rejected",
      notice: "Manufactured in Product Zone",
    },
    {
      contractCode: "H00004",
      registrationDate: "0703020252",
      entryDate: "0703020252",
      property: "458 Park Ave, CA",
      insurancePassage: "Home",
      status: "In Review",
      notice: "Respects Property Incident's Report",
    },
    {
      contractCode: "H00005",
      registrationDate: "0703020252",
      entryDate: "0703020252",
      property: "457 Park Ave, CA",
      insurancePassage: "Home",
      status: "Approved",
      notice: "Respects Property Protection Report",
    },
  ];

  return (
    <div className="w-full p-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-gray-600 text-lg mb-4">
        <FaHome className="text-xl cursor-pointer" onClick={() => navigate("/")} />
        <span className="text-black font-semibold">&gt;</span>
        <span className="font-semibold text-black">Register for insurance</span>
        <span className="text-black font-semibold">&gt;</span>
        <span className="text-gray-400">Registered Insurance List</span>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-8 justify-center text-xl border-b border-black">
        <div className="cursor-pointer" onClick={() => navigate("/insurance/asset-information")}>Asset Information</div>
        <div className="cursor-pointer" onClick={() => navigate("/insurance/personal-information")}>Personal Information</div>
        <div className="cursor-pointer" onClick={() => navigate("/insurance/payment-information")}>Payment Information</div>
        <div className="border-b-4 border-amber-700 cursor-pointer">Registered Insurance List</div>
      </div>

      {/* Table */}
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Registered Insurance List</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Contract Code</th>
              <th className="py-2 px-4 border-b">Registration Date</th>
              <th className="py-2 px-4 border-b">Entry Date</th>
              <th className="py-2 px-4 border-b">Property</th>
              <th className="py-2 px-4 border-b">Insurance Passage</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Notice</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{contract.contractCode}</td>
                <td className="py-2 px-4 border-b">{contract.registrationDate}</td>
                <td className="py-2 px-4 border-b">{contract.entryDate}</td>
                <td className="py-2 px-4 border-b">{contract.property}</td>
                <td className="py-2 px-4 border-b">{contract.insurancePassage}</td>
                <td className="py-2 px-4 border-b">{contract.status}</td>
                <td className="py-2 px-4 border-b">{contract.notice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisteredList;
