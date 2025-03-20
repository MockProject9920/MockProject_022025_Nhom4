import React, { useState } from "react";
import { FaSearch, FaMicrophone, FaTachometerAlt, FaUserCircle, FaBars } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 right-0 bg-white shadow-md py-3 px-6 flex items-center justify-between lg:flex-row sm:flex-row flex-col sm:space-y-0 space-y-4 
        md:left-[16rem] sm:left-[48px] left-0 pb-16 sm:pb-4">	
            {/* Logo */}
            <div className="hidden sm:block cursor-pointer text-xl font-semibold text-gray-800 hover:text-black">
                FourShield
            </div>

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

            {/* User Section (Chỉ hiển thị trên màn hình sm trở lên) */}
            <div className="hidden sm:flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-black transition-transform duration-200 transform hover:-translate-y-1">
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-black transition-transform duration-200 transform hover:-translate-y-1">
                    <FaUserCircle />
                    <span>User</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
