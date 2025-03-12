import React from "react";
import UserSidebar from "../components/UserSidebar";
import UserNavbar from "../components/UserNavbar";

function UserLayout() {
  return (
    <div className="flex space-x-1">
      <UserSidebar />
      <div>
        <UserNavbar />
      </div>
    </div>
  );
}

export default UserLayout;
