const UserSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-6">FourShield Insurance</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <i className="ri-archive-fill"></i>
          <p>Insurance</p>
        </li>
        <li className="flex items-center  space-x-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <i className="ri-file-text-fill"></i>
          <p>Personal Contract</p>
        </li>
        <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <i className="ri-money-dollar-box-fill"></i> <p>Submit a Claims</p>
        </li>
        <li className="flex items-center space-x-2  text-red-500 font-bold   cursor-pointer">
          <i className="ri-group-fill text-xl"></i> <p>Personal Profile</p>
        </li>
        <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-500  cursor-pointer">
          <i className="ri-bank-card-2-fill"></i> <p>Payment Page</p>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
