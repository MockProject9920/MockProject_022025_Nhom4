import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Search Bar */}
      <div className="flex items-center border rounded-full px-4 py-2 w-96 bg-gray-100">
        <span className="mr-2 text-gray-500">🔍</span>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none w-full"
        />
        <span className="ml-2 text-gray-500">🎤</span>
      </div>

      {/* Right Section: Dashboard & Admin */}
      <div className="flex items-center space-x-4">
        <Link to="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-black">
          <span>🖥</span>
          <span>Dashboard</span>
        </Link>
        <span className="text-gray-400">|</span>
        <Link to="/admin" className="flex items-center space-x-2 text-gray-700 hover:text-black">
          <span>👤</span>
          <span>Admin</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
