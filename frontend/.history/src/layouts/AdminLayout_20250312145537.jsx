import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

function AdminLayout() {
  return (
    <div className="flex space-x-1 justify-between">
      <AdminSidebar />
      <div>
        <AdminNavbar />
        <div className="justify-normal">check</div>
      </div>
    </div>
  );
}

export default AdminLayout;
