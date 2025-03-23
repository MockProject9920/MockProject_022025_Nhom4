import { FaSearch, FaUserCircle } from "react-icons/fa";


function HeaderAppraiser() {
    return ( 
        <header className="bg-blue-600 p-4 flex justify-between items-center text-white">
                    <h1 className="text-lg font-bold">Admin Dashboard</h1>
                    <div className="relative flex justify-around items-center">
                        <FaSearch className="absolute left-3 text-gray-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Custommer Name..."
                            className="pl-10 pr-4 py-2 h-10 rounded-full text-gray-700 focus:outline-none"
                        />
                        </div>
                        <div className="relative flex justify-around items-center">
                            <FaSearch className="absolute left-14 text-gray-400 text-lg" />
                            <input
                                type="text"
                                placeholder="Appraiser Name..."
                                className="!ml-10 pl-10 pr-4 py-2 h-10 rounded-full text-gray-700 focus:outline-none"
                            />
                        </div>
                    <div className="flex items-center space-x-4">
                <span>Dashboard</span>
                <FaUserCircle className="text-2xl" />
                <span>Admin</span>
              </div>
                </header>
     );
}

export default HeaderAppraiser;