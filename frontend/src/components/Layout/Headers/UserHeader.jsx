// Import necessary icons from react-icons library
import { FaSearch, FaUserCircle } from "react-icons/fa";

// UserHeader component represents the header section of the user dashboard.
const UserHeader = () => {
  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center text-white">
      {/* Dashboard title */}
      <h1 className="text-lg font-bold">User Dashboard</h1>

      {/* Search bar with an icon */}
      <div className="relative flex items-center">
        <FaSearch className="absolute left-3 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 h-10 rounded-full text-gray-700 focus:outline-none"
        />
      </div>

      {/* Navigation links and user icon */}
      <div className="flex items-center space-x-4">
        <i className="ri-home-9-fill text-2xl"></i>
        <span>Home</span>
        <FaUserCircle className="text-2xl" />
        <span>Customer</span>
      </div>
    </header>
  );
};

// Export UserHeader component for use in other parts of the application
export default UserHeader;
