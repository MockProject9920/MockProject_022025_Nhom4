import React from "react";
import { NavLink } from "react-router-dom";
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
  const linkClass =
    "flex items-center space-x-3 text-gray-800 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-transform duration-200 transform hover:-translate-y-1";
  const activeClass = "bg-gray-200 text-red-600";

  return (
    <div className="w-64 bg-white h-screen p-5 shadow-lg border-r border-gray-200">
      <ul className="space-y-4">
        <NavLink to="/" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
          <FaTachometerAlt className="text-blue-600" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/user-management" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
          <FaUsers className="text-green-600" />
          <span>User Management</span>
        </NavLink>
        <NavLink to="/contract-manager" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
          <FaFileContract className="text-indigo-600" />
          <span>Contract Manager</span>
        </NavLink>
        <NavLink to="/insurance-product" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
          <FaBox className="text-orange-600" />
          <span>Insurance Product</span>
        </NavLink>
        <NavLink to="/payment-invoice" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
          <FaFileInvoice className="text-purple-600" />
          <span>Payment & Invoice</span>
        </NavLink>
        <li className="group">
          <div className="flex items-center space-x-3 text-gray-800 p-2 rounded-lg cursor-pointer">
            <FaMoneyCheckAlt className="text-red-500" />
            <span>Claims</span>
          </div>
          <ul className="ml-6 space-y-2 hidden group-hover:block">
            <NavLink to="/claims-processing" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
              <span>Processing</span>
            </NavLink>
            <NavLink to="/claims-settlement-tracking" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
              <span>Settlement Tracking</span>
            </NavLink>
          </ul>
        </li>
        <NavLink to="/appraisers" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
          <FaStar className="text-yellow-500" />
          <span>Appraisers</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;