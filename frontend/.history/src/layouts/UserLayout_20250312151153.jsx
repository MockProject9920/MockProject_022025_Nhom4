import React from "react";
import UserSidebar from "../components/UserSidebar";
import UserNavbar from "../components/UserNavbar";

function UserLayout({ children }) {
  return (
    <div className="flex space-x-1">
      <UserSidebar />
      <div>
        <UserNavbar />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default UserLayout;
