import React from "react";
import {
  FaSearch,
  FaMicrophone,
  FaTachometerAlt,
  FaUserCircle
} from "react-icons/fa";

const Header = () => {
	return (
		<header className="bg-white shadow-md py-3 px-6 flex items-center justify-between">
			{/* Logo */}
			<div className="cursor-pointer text-xl font-semibold text-gray-800 hover:text-black">FourShield</div>

			{/* Search Bar */}
			<div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
				<FaSearch className="text-gray-500 mr-2" />
				<input
					type="text"
					placeholder="Search..."
					className="bg-transparent outline-none flex-grow text-gray-700 placeholder-gray-500"
				/>
				<FaMicrophone className="text-gray-500 cursor-pointer" />
			</div>

			{/* User Section */}
			<div className="flex items-center space-x-4">
				<div className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-black transition-transform duration-200 transform hover:-translate-y-1">
					<FaTachometerAlt />
					<span>Dashboard</span>
				</div>
				<span className="text-gray-400">|</span>
				<div className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-black transition-transform duration-200 transform hover:-translate-y-1">
					<FaUserCircle />
					<span>Admin</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
