import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaFileContract,
  FaBox,
  FaFileInvoice,
  FaMoneyCheckAlt,
  FaStar,
} from "react-icons/fa";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="w-64 bg-white h-screen p-5 shadow-lg border-r border-gray-200">
      <ul className="space-y-4">
        <li className="flex items-center space-x-3 text-gray-800 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-transform duration-200 transform hover:-translate-y-1">
          <FaTachometerAlt className="text-blue-600" />
          <span>Dashboard</span>
        </li>
        <li
          className="flex items-center space-x-3 cursor-pointer text-gray-800 hover:bg-gray-100 p-2 rounded-lg transition-transform duration-200 transform hover:-translate-y-1"
          onClick={() => toggleMenu("userManagement")}
        >
          <FaUsers className="text-green-600" />
          <span>User Management</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-800 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-transform duration-200 transform hover:-translate-y-1">
          <FaFileContract className="text-indigo-600" />
          <span>Contract Manager</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-800 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-transform duration-200 transform hover:-translate-y-1">
          <FaBox className="text-orange-600" />
          <span>Insurance Product</span>
        </li>
        <li
          className="flex items-center space-x-3 cursor-pointer text-gray-800 hover:bg-gray-100 p-2 rounded-lg transition-transform duration-200 transform hover:-translate-y-1"
          onClick={() => toggleMenu("paymentInvoice")}
        >
          <FaFileInvoice className="text-purple-600" />
          <span>Payment & Invoice</span>
        </li>
        <li className="flex items-center space-x-3 text-red-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-red-50 transition-transform duration-200 transform hover:-translate-y-1">
          <FaMoneyCheckAlt />
          <span>Claims Processing</span>
        </li>
        <li
          className="flex items-center space-x-3 cursor-pointer text-gray-800 hover:bg-gray-100 p-2 rounded-lg transition-transform duration-200 transform hover:-translate-y-1"
          onClick={() => toggleMenu("appraisers")}
        >
          <FaStar className="text-yellow-500" />
          <span>Appraisers</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
