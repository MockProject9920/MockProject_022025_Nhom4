import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar bên trái */}
      <Sidebar />

      <div className="flex-1 p-6">
        {/* Thanh tìm kiếm + Admin */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded-lg w-1/3"
          />
          <div className="flex items-center space-x-4">
            <span className="font-medium">Dashboard</span>
            <span className="font-medium">Admin</span>
          </div>
        </div>

        {/* Nội dung trang con */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
