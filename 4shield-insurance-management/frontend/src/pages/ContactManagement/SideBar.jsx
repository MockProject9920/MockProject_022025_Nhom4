import React, { useState } from 'react';
import { FaTachometerAlt, FaUsers, FaUserCircle, FaFileAlt, FaCogs, FaDollarSign, FaRegStar, FaReceipt } from 'react-icons/fa';
import { MdOutlineWork, MdOutlineBusinessCenter, MdOutlinePayment } from 'react-icons/md';

const Sidebar = () => {
    const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
    const [isPaymentInvoiceOpen, setIsPaymentInvoiceOpen] = useState(false);
    const [isAppraisersOpen, setIsAppraisersOpen] = useState(false);

    const toggleUserManagement = () => setIsUserManagementOpen(!isUserManagementOpen);
    const togglePaymentInvoice = () => setIsPaymentInvoiceOpen(!isPaymentInvoiceOpen);
    const toggleAppraisers = () => setIsAppraisersOpen(!isAppraisersOpen);

    return (
        <div className="w-72 bg-gray-100 p-6 space-y-6 text-nowrap h-[100vh]">
            <div className="text-2xl font-semibold mb-8">FourShield Insurance</div>
            <ul className="space-y-4">
                {/* Dashboard item */}
                <li className="text-lg flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                </li>

                {/* User Management item */}
                <li className="text-lg flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                    <FaUsers />
                    <span>User Management</span>
                    <button onClick={toggleUserManagement} className="ml-auto">
                        {isUserManagementOpen ? '▲' : '▼'}
                    </button>
                </li>

                {/* Submenu for User Management */}
                {isUserManagementOpen && (
                    <ul className="ml-6 space-y-2 text-sm">
                        <li className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                            <FaUserCircle />
                            <span>Customer</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                            <MdOutlineWork />
                            <span>Employee</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                            <MdOutlineBusinessCenter />
                            <span>Role</span>
                        </li>
                    </ul>
                )}

                {/* Contract Manager item */}
                <li className="text-lg flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                    <FaFileAlt />
                    <span>Contract Manager</span>
                </li>

                {/* Insurance Product item */}
                <li className="text-lg flex items-center space-x-2 text-red-500 hover:bg-gray-200 p-2 rounded">
                    <FaCogs />
                    <span>Insurance Product</span>
                </li>

                {/* Property Management item */}
                <li className="text-lg flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                    <FaDollarSign />
                    <span>Property Management</span>
                </li>

                {/* Payment & Invoice item */}
                <li className="text-lg flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                    <MdOutlinePayment />
                    <span>Payment & Invoice</span>
                    <button onClick={togglePaymentInvoice} className="ml-auto">
                        {isPaymentInvoiceOpen ? '▲' : '▼'}
                    </button>
                </li>

                {/* Submenu for Payment & Invoice */}
                {isPaymentInvoiceOpen && (
                    <ul className="ml-6 space-y-2 text-sm">
                        <li className="hover:bg-gray-200 p-2 rounded">
                            <span>Transaction Management</span>
                        </li>
                        <li className="hover:bg-gray-200 p-2 rounded">
                            <span>Invoice Management</span>
                        </li>
                    </ul>
                )}

                {/* Claims Processing item */}
                <li className="text-lg flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                    <FaReceipt />
                    <span>Claims Processing</span>
                </li>

                {/* Appraisers item */}
                <li className="text-lg flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                    <FaRegStar />
                    <span>Appraisers</span>
                    <button onClick={toggleAppraisers} className="ml-auto">
                        {isAppraisersOpen ? '▲' : '▼'}
                    </button>
                </li>

                {/* Submenu for Appraisers */}
                {isAppraisersOpen && (
                    <ul className="ml-6 space-y-2 text-sm">
                        <li className="hover:bg-gray-200 p-2 rounded">
                            <span>List of Appraisers</span>
                        </li>
                        <li className="hover:bg-gray-200 p-2 rounded">
                            <span>Assessment Report</span>
                        </li>
                    </ul>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
