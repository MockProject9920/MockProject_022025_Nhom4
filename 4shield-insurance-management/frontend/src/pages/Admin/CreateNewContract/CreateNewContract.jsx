import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Layout/Header';
import Sidebar from '../../../components/Layout/Sidebar';
import CreateNewCus from './CreateNewCus/CreateNewCus';

const CreateNewContract = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(1);
    const [status, setStatus] = useState('Draft');
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [selectedProperty, setSelectedProperty] = useState('');
    const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
    const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
    const [showNewCustomerModal, setShowNewCustomerModal] = useState(false);
    const [showNewPropertyModal, setShowNewPropertyModal] = useState(false);

    const steps = [
        { id: 1, name: 'General Options' },
        { id: 2, name: 'Customer Information' },
        { id: 3, name: 'Property Information' },
        { id: 4, name: 'Insurance Details' },
        { id: 5, name: 'Contract Status' },
        { id: 6, name: 'Contract Terms' },
    ];

    const customers = [
        { id: '001', name: 'Mihaela Ionita' },
        { id: '002', name: 'ABC Ionita' },
        { id: '003', name: 'EDF Ionita' },
    ];

    const properties = [
        { id: '001', name: 'Mihaela Ionita' },
        { id: '002', name: 'ABC Ionita' },
        { id: '003', name: 'EDF Ionita' },
    ];

    const statusOptions = [
        { id: 1, name: 'Draft' },
        { id: 2, name: 'Under review' },
        { id: 3, name: 'Pending Approval' },
        { id: 4, name: 'Approved' },
        { id: 5, name: 'Signed' },
        { id: 6, name: 'Active' },
    ];

    const handleNextPage = () => {
        navigate('/inforcus');
    };

    const handleCancel = () => {
        navigate('/contact-manager');
    };

    const handleStepClick = (step) => {
        if (step === 1) {
            navigate('/create-customer');
        } else if (step === 2) {
            navigate('/inforcus');
        }
    };

    return (
        <div className="w-[80vw] flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <div className="p-6 flex-1 overflow-auto">

                    <div className="flex">
                        <div className="flex-1 pr-8">
                            <div className="flex justify-between mb-10">
                                {steps.map((step) => (
                                    <div
                                        key={step.id}
                                        className="flex flex-col items-center w-1/6"
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                ${activeStep === step.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                                            onClick={() => handleStepClick(step.id)}
                                        >
                                            {step.id}
                                        </div>
                                        <span className="text-xs mt-2 text-center">{step.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center text-gray-700 mb-6">
                                <span className="font-bold">Contract Manager</span>
                                <span className="mx-2">/</span>
                                <span className="font-bold">Create New Contract</span>
                            </div>
                            <div className="bg-white p-6 rounded-md shadow mb-6">
                                <h2 className="text-xl font-bold mb-6">General Options</h2>

                                {/* Customer Selection */}
                                <div className="mb-6 relative">
                                    <label className="block mb-2 font-medium">Customer</label>
                                    <input
                                        className="w-full p-2 border rounded cursor-pointer"
                                        value={selectedCustomer}
                                        readOnly
                                        onClick={() => setShowCustomerDropdown(!showCustomerDropdown)}
                                        placeholder="--Choose a Customer--"
                                    />
                                    {showCustomerDropdown && (
                                        <div className="absolute w-full bg-white shadow-md mt-1 rounded-md border z-10">
                                            <div
                                                className="p-2 bg-gray-200 flex items-center cursor-pointer"
                                                onClick={() => {
                                                    setShowCustomerDropdown(false);
                                                    setShowNewCustomerModal(true);
                                                }}
                                            >
                                                <span className="text-sm font-bold">+ Add New Customer</span>
                                            </div>
                                            {customers.map((customer) => (
                                                <div
                                                    key={customer.id}
                                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        setSelectedCustomer(`${customer.id} - ${customer.name}`);
                                                        setShowCustomerDropdown(false);
                                                    }}
                                                >
                                                    {customer.id} - {customer.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Property Selection */}
                                <div className="mb-6 relative">
                                    <label className="block mb-2 font-medium">Property</label>
                                    <input
                                        className="w-full p-2 border rounded cursor-pointer"
                                        value={selectedProperty}
                                        readOnly
                                        onClick={() => setShowPropertyDropdown(!showPropertyDropdown)}
                                        placeholder="--Choose a Property--"
                                    />
                                    {showPropertyDropdown && (
                                        <div className="absolute w-full bg-white shadow-md mt-1 rounded-md border z-10">
                                            <div
                                                className="p-2 bg-gray-200 flex items-center cursor-pointer"
                                                onClick={() => {
                                                    setShowPropertyDropdown(false);
                                                    setShowNewPropertyModal(true);
                                                }}
                                            >
                                                <span className="text-sm font-bold">+ Add New Property</span>
                                            </div>
                                            {properties.map((property) => (
                                                <div
                                                    key={property.id}
                                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        setSelectedProperty(`${property.id} - ${property.name}`);
                                                        setShowPropertyDropdown(false);
                                                    }}
                                                >
                                                    {property.id} - {property.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 opacity-100 brightness-100 pointer-events-auto"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleNextPage}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 opacity-100 brightness-100 pointer-events-auto"
                                >
                                    Next Page
                                </button>
                            </div>
                        </div>

                        {/* Status Sidebar */}
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
            </div>

            {/* New Customer & Property Modals */}
            {showNewCustomerModal && <CreateNewCus onClose={() => setShowNewCustomerModal(false)} />}
            {showNewPropertyModal && <CreateNewCus onClose={() => setShowNewPropertyModal(false)} />}
        </div>
    );
};

export default CreateNewContract;
