import UserHeader from "@/components/Layout/Headers/UserHeader";
import UserSidebar from "@/components/Layout/Sidebar/UserSidebar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <UserSidebar />
      <div className="flex-1 flex flex-col">
        <UserHeader />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
