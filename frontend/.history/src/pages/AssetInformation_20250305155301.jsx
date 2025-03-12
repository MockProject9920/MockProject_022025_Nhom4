import React from "react";
import "@fontsource/playfair-display";

function AssetInformation() {
  return (
    <div className="flex space-x-0 py-10 h-screen">
      <div className="w-[250px] space-y-8 h-full">
        <p
          className="text-4xl text-[#2772BD] font-bold pl-10"
          style={{ fontFamily: "Playfair Display" }}
        >
          Fourshield Insurance
        </p>
        <div className="space-y-6 h-full p-6 border-t-1 border-r-1 border-t-[#E29578] border-r-[#E29578]">
          <div className="flex space-x-2 items-center">
            <i class="ri-circle-fill text-[#E29578]"></i>
            <p className="text-xl text-[#E29578]">Insurance</p>
          </div>
          <div className="flex space-x-2 items-center">
            <i class="ri-circle-fill"></i>
            <p className="text-xl">Personal Contract</p>
          </div>
          <div className="flex space-x-2 items-center">
            <i class="ri-circle-fill"></i>
            <p className="text-xl">Claims</p>
          </div>
          <div className="flex space-x-2 items-center">
            <i class="ri-circle-fill"></i>
            <p className="text-xl">Personal Profile</p>
          </div>
          <div className="flex space-x-2 items-center">
            <i class="ri-circle-fill"></i>
            <p className="text-xl">Submit a Claims</p>
          </div>
        </div>
      </div>

      <div>
        <div className="relative">
          <input
            placeholder="Search"
            className="w-100 h-10 border border-[#2772BD] text-center py-2 px-10 rounded-xl"
          />
          <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2772BD] text-xl"></i>
        </div>
      </div>
    </div>
  );
}

export default AssetInformation;
