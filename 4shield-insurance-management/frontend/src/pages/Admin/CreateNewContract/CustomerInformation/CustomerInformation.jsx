import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../../components/Layout/Header";
import Sidebar from "../../../../components/Layout/Sidebar";

const steps = [
    { id: 1, name: "General Options", path: "/contract-manager/create-customer" },
    { id: 2, name: "Customer Information", path: "/inforcus" },
    { id: 3, name: "Property Information", path: "/property-information" },
    { id: 4, name: "Insurance Details", path: "/insurance-details" },
    { id: 5, name: "Contract Status", path: "/contract-status" },
    { id: 6, name: "Contract Terms", path: "/contract-terms" },
];

const statusOptions = [
    { id: 1, name: "Draft" },
    { id: 2, name: "Under review" },
    { id: 3, name: "Pending Approval" },
    { id: 4, name: "Approved" },
    { id: 5, name: "Signed" },
    { id: 6, name: "Active" },
];

const CustomerInformation = () => {
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

                    {/* Customer Information */}
                    <div className="flex gap-6">
                        <div className="w-4/5 p-6 bg-white rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold text-center mb-4">Customer Information</h2>
                            <div className="space-y-4">
                                <div><strong>Full Name:</strong> Mihaela Ionita</div>
                                <div><strong>Gender:</strong> Female</div>
                                <div><strong>Email Address:</strong> miha@email.com</div>
                                <div><strong>Phone Number:</strong> +1 (555) 123-4567</div>
                                <div><strong>Mailing Address:</strong> 789 Oak Road, Springfield, USA</div>
                                <div><strong>SSN/Tax ID:</strong> XXX-XX-6789</div>
                            </div>
                        </div>

                        {/* Status Selection */}
                        <div className="w-48 border-l pl-6">
                            <h3 className="font-bold mb-4">Status</h3>
                            <div className="space-y-2">
                                {statusOptions.map((option) => (
                                    <div
                                        key={option.id}
                                        className={`cursor-pointer p-2 rounded-md ${status === option.name ? "bg-yellow-400 text-white font-bold" : "hover:bg-gray-100"
                                            }`}
                                        onClick={() => setStatus(option.name)}
                                    >
                                        {option.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Action Buttons */}
                <div className="flex justify-between mt-6 p-6">
                    <button onClick={() => navigate("/contact-manager")} className="bg-red-500 text-white px-4 py-2 rounded-md">Cancel</button>
                    <button onClick={() => navigate("/property-information")} className="bg-green-600 text-white px-4 py-2 rounded-md">Next Page</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerInformation;
