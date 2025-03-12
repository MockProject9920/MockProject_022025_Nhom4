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
        <i class="ri-search-line absolute left-5"></i>
        <i class="ri-mic-fill absolute"></i>
      </div>
    </div>
  );
}

export default AdminNavbar;
