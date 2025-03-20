import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../../components/Layout/Header";
import Sidebar from "../../../../components/Layout/Sidebar";

const steps = [
    { id: 1, name: "Customer Information", path: "/inforcus" },
    { id: 2, name: "Property Information", path: "/property-information" },
    { id: 3, name: "Insurance Details", path: "/insurance-details" },
    { id: 4, name: "Contract Status", path: "/contract-status" },
    { id: 5, name: "Contract Terms", path: "/contract-terms" },
];

const statusOptions = [
    "Draft", "Under review", "Pending Approval", "Approved", "Signed", "Active"
];

const PropertyInformation = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState("Draft");

    return (
        <div className="min-h-screen w-[80vw] flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <div className="p-6 flex-1 overflow-auto">
                    {/* Steps Navigation */}
                    <div className="flex justify-between mb-6">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-center cursor-pointer"
                                onClick={() => navigate(step.path)}
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.path === window.location.pathname ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                                    {step.id}
                                </div>
                                <span className="text-xs mt-2 text-center">{step.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Property Information */}
                    <h2 className="text-xl font-bold text-center mb-4">Property Information</h2>
                    <div className="flex gap-6">
                        <div className="w-4/5 p-6 bg-white rounded-lg shadow-lg">
                            <div className="space-y-4">
                                <div><strong>Property Type:</strong> Apartment</div>
                                <div><strong>Property Address 1:</strong> 123 Main St, New York, 10001 USA</div>
                                <div><strong>Property Address 2:</strong> Apt 4B</div>
                                <div><strong>Year Built:</strong> 2005</div>
                                <div><strong>Lot Size (sq ft):</strong> N/A</div>
                                <div><strong>Living Area (sq ft):</strong> 900</div>
                                <div><strong>Bedrooms:</strong> 2</div>
                                <div><strong>Bathrooms:</strong> 1</div>
                                <div><strong>Attached Garage:</strong> No</div>
                                <div><strong>Additional Features:</strong> Balcony, Gym Access</div>
                                <div><strong>Recent Renovations:</strong> New Flooring</div>
                                <div><strong>Property Value ($):</strong> 450,000</div>
                            </div>
                        </div>

                        {/* Status Selection */}
                        <div className="w-48 border-l pl-6">
                            <h3 className="font-bold mb-4">Status</h3>
                            <div className="space-y-2">
                                {statusOptions.map((option) => (
                                    <div
                                        key={option}
                                        className={`cursor-pointer p-2 rounded-md ${status === option ? "bg-yellow-400 text-white font-bold" : "hover:bg-gray-100"}`}
                                        onClick={() => setStatus(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Action Buttons */}
                <div className="flex justify-between mt-6 p-6">
                    <button onClick={() => navigate("/inforcus")} className="bg-blue-500 text-white px-4 py-2 rounded-md">Previous Page</button>
                    <button onClick={() => navigate("/insurance-details")} className="bg-green-600 text-white px-4 py-2 rounded-md">Next Page</button>
                </div>
            </div>
        </div>
    );
};

export default PropertyInformation;
