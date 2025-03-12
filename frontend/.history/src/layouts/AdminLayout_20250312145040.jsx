import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

function AdminLayout() {
  return (
    <div>
      <AdminSidebar />
      <div>
        <AdminNavbar />
      </div>
    </div>
  );
}

export default AdminLayout;
