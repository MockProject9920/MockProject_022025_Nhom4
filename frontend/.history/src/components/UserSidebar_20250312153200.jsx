import React from "react";
import { Link } from "react-router-dom";

function UserSidebar() {
  return (
    <div className="space-y-10 h-screen w-65 ">
      <p className="text-3xl font-medium m-8">FourShield Insurance</p>
      <div className="space-y-6 h-full w-full bg-[#EBF0FF] p-8">
        <div className="flex space-x-2">
          <Link to="/user/insurance">
            <i class="ri-archive-fill"></i>
            <p>Insurance</p>
          </Link>
        </div>

        <div className="flex space-x-2">
          <i class="ri-file-text-fill"></i>
          <p>Personal Contract</p>
        </div>

        <div className=" flex space-x-2">
          <i class="ri-money-dollar-box-fill"></i> <p>Submit a Claims</p>
        </div>
        <div className="flex space-x-2">
          <i class="ri-group-fill text-2xl"></i> <p>Personal Profile</p>
        </div>
        <div className="flex space-x-2">
          <i class="ri-bank-card-2-fill"></i> <p>Payment Page</p>
        </div>
      </div>
    </div>
  );
}

export default UserSidebar;
