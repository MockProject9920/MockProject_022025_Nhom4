import React from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
const Header = () => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">


            {/* Center Section: Search Bar */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 max-w-md flex-1 mx-4">
                <FaSearch className="text-gray-600" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent border-none focus:outline-none ml-2 flex-1"
                />
                <FaMicrophone className="text-gray-600" />
            </div>

            {/* Right Section: Dashboard and Admin */}
            <div className="flex items-center space-x-6">
                <button className="text-gray-700 hover:text-blue-600 focus:outline-none">Dashboard</button>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-700">Admin</span>
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center text-white font-bold">
                        A
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
