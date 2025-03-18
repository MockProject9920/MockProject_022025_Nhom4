import { Outlet, Link } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar.jsx";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar bên trái */}
      <Sidebar />

      {/* Phần nội dung chính */}
      <div className="flex-1 p-6">
        {/* Thanh tìm kiếm + Admin */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-700">Dashboard</span>
            <span className="font-medium text-gray-700">Admin</span>
          </div>
        </div>

        {/* Nội dung trang con */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;