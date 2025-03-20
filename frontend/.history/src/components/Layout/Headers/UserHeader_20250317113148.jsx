import { FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <h1 className="text-lg font-bold">User Dashboard</h1>
      <div className="relative flex items-center">
        <FaSearch className="absolute left-3 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 h-10 rounded-full text-gray-700 focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <i className="ri-home-9-fill"></i>
        <span>Home</span>
        <FaUserCircle className="text-2xl" />
        <span>Customer</span>
      </div>
    </header>
  );
};

export default Header;
