import React from "react";

function UserSidebar() {
  return (
    <div className="space-y-10 h-screen w-75 ">
      <p className="text-3xl font-medium m-8">FourShield Insurance</p>
      <div className="space-y-6 h-full w-full bg-[#EBF0FF] p-8">
        <div className="flex space-x-2">
          <i class="ri-dashboard-3-fill"></i>
          <p>Dashboard</p>
        </div>

        <div className="flex space-x-2">
          <i class="ri-money-dollar-box-fill"></i>
          <p>Claims Processing</p>
        </div>
        <div>
          <div className=" flex space-x-2">
            <i class="ri-star-fill"></i> <p>Appraisers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSidebar;
