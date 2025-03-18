import React from "react";
import { FaSearch, FaMicrophone, FaTachometerAlt, FaUserCircle, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-white shadow-md py-3 px-6 flex items-center justify-between lg:flex-row sm:flex-row flex-col sm:space-y-0 space-y-4">
			{/* Logo */}
			<div className="cursor-pointer text-xl font-semibold text-gray-800 hover:text-black">FourShield</div>

			{/* Search Bar */}
			<div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full sm:w-1/2 md:w-1/3">
				<FaSearch className="text-gray-500 mr-2" />
				<input
					type="text"
					placeholder="Search..."
					className="bg-transparent outline-none flex-grow text-gray-700 placeholder-gray-500"
				/>
				<FaMicrophone className="text-gray-500 cursor-pointer" />
			</div>

			{/* Mobile Menu Icon */}
			<button className="sm:hidden" onClick={toggleMenu}>
				<FaBars className="text-gray-700 text-2xl" />
			</button>

			{/* User Section */}
			<div
				className={`sm:flex items-center space-x-4 ${isMenuOpen ? 'flex flex-col space-y-4' : 'hidden'}`}
			>
				<div className="hidden sm:flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-black transition-transform duration-200 transform hover:-translate-y-1">
					<FaTachometerAlt />
					<span>Dashboard</span>
				</div>
				<div className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-black transition-transform duration-200 transform hover:-translate-y-1">
					<FaUserCircle />
					<span>Admin</span>
				</div>
			</div>

		</header>
	);
};

export default Header;