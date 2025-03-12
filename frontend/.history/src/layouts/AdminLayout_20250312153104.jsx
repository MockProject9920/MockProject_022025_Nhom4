import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

function AdminLayout({ children }) {
  return (
    <div className="flex space-x-1 ">
      <AdminSidebar />
      <div>
        <AdminNavbar />
        <div className="ml-10">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
