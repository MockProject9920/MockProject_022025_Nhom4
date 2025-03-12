import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import PropTypes from "prop-types";

function AdminLayout({ children }) {
  return (
    <div className="flex space-x-1 ">
      <AdminSidebar />
      <div>
        <AdminNavbar />
        <div className="">{children}</div>
      </div>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.any,
};

export default AdminLayout;
