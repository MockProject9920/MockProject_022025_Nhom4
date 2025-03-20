// UserSidebar component represents the sidebar navigation menu.
const UserSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      {/* Sidebar title */}
      <h2 className="text-xl font-bold mb-6">FourShield Insurance</h2>

      {/* Navigation menu items */}
      <ul className="space-y-4">
        {/* Menu item: Insurance */}
        <li className="flex items-center space-x-2 text-red-500 font-bold hover:text-blue-500 cursor-pointer">
          <i className="ri-archive-fill"></i>
          <p>Insurance</p>
        </li>

        {/* Menu item: Personal Contract */}
        <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <i className="ri-file-text-fill"></i>
          <p>Personal Contract</p>
        </li>

        {/* Menu item: Submit a Claims */}
        <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <i className="ri-money-dollar-box-fill"></i>
          <p>Submit a Claims</p>
        </li>

        {/* Menu item: Personal Profile */}
        <li className="flex items-center space-x-2 text-gray-700 cursor-pointer">
          <i className="ri-group-fill text-xl"></i>
          <p>Personal Profile</p>
        </li>

        {/* Menu item: Payment Page */}
        <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <i className="ri-bank-card-2-fill"></i>
          <p>Payment Page</p>
        </li>
      </ul>
    </div>
  );
};

// Export UserSidebar component for use in other parts of the application
export default UserSidebar;
