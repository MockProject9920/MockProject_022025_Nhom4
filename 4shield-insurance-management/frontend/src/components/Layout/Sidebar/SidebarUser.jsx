import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserShield,
  FaFileAlt,
  FaUserCircle,
  FaMoneyBillWave,
  FaBars,
  FaTimes
} from "react-icons/fa";

const SidebarUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const linkClass =
    "flex items-center space-x-3 text-gray-800 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-transform duration-200 transform hover:-translate-y-1";
  const activeClass = "bg-gray-200 text-red-600";

  const sidebarContent = (
    <ul className="space-y-4">
      <NavLink to="/" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
        <FaHome className="text-blue-600" />
        <span>Insurance</span>
      </NavLink>
      <NavLink to="/user-management" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
        <FaUserShield className="text-green-600" />
        <span>Personal Contract</span>
      </NavLink>
      <NavLink to="/contract-manager" className={`${linkClass} ${activeClass}`}>
        <FaFileAlt className="text-indigo-600" />
        <span>Submit a Claim</span>
      </NavLink>
      <NavLink to="/insurance-product" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
        <FaUserCircle className="text-orange-600" />
        <span>Personal Profile</span>
      </NavLink>
      <NavLink to="/payment-invoice" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
        <FaMoneyBillWave className="text-purple-600" />
        <span>Payment Page</span>
      </NavLink>

      <div className="md:hidden">
        <NavLink to="/user" end className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
          <FaUserShield className="text-red-500" />
          <span>User</span>
        </NavLink>
      </div>
    </ul>
  );

  return (
    <div>
      <button
        className="md:hidden text-2xl p-3 fixed top-[7.2%] left-[43.5%] sm:top-0 sm:left-0 z-10"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      <div className="hidden md:block fixed left-0 w-64 bg-white h-screen p-5 shadow-lg border-r border-gray-200">
        {sidebarContent}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="w-64 bg-white h-full p-5 shadow-lg">
            <button className="text-2xl mb-5" onClick={toggleSidebar}>
              <FaTimes />
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarUser;