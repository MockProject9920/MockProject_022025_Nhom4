import React from 'react';
import { FaFileAlt, FaCogs, FaDollarSign, FaReceipt } from 'react-icons/fa';


const Sidebar = () => {

    return (
        <div className="w-1/5 bg-gray-100 p-6 space-y-6 text-nowrap h-[100vh]">
            <div className="text-2xl font-semibold mb-8">FourShield Insurance</div>
            <ul className="space-y-4">
                {/* Insurance item */}
                <li className="text-lg flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                    <FaFileAlt />
                    <span>Insurance</span>
                </li>

                {/* Personal Contract item */}
                <li className="text-lg flex items-center space-x-2 text-red-500 hover:bg-gray-200 p-2 rounded">
                    <FaCogs />
                    <span>Personal Contract</span>
                </li>

                {/* Submit a Claim item */}
                <li className="text-lg flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                    <FaDollarSign />
                    <span>Submit a Claim</span>
                </li>

                {/* Personal Profile item */}
                <li className="text-lg flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                    <FaReceipt />
                    <span>Personal Profile</span>
                </li>

                {/* Payment item */}
                <li className="text-lg flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                    <FaReceipt />
                    <span>Payment</span>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;
