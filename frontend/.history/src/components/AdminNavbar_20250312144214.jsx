import React from "react";

function AdminNavbar() {
  return (
    <div>
      <div className="relative">
        <input
          type="search"
          placeholder="Search"
          className=" p-3 pl-12 w-120 bg-[#b7b7b9] h-10 rounded-2xl"
        />
        <i class="ri-search-line absolute left-5 top-2 text-lg "></i>
        <i class="ri-mic-fill absolute right-65 top-2 text-lg"></i>
      </div>
      <div className="flex space-x-3">
        <div>
          <i class="ri-dashboard-3-fill"></i>

          <p>Dashboard</p>
        </div>
        <div>
          <i class="ri-user-fill"></i>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
