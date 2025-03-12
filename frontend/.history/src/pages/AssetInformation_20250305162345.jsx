import React from "react";
import "@fontsource/playfair-display";

function AssetInformation() {
  return (
    <div className="flex space-x-0 py-10 h-screen w-screen">
      <div className="w-[280px] space-y-8 h-full">
        <p
          className="text-4xl text-[#2772BD] font-bold pl-10"
          style={{ fontFamily: "Playfair Display" }}
        >
          Fourshield Insurance
        </p>
        <div className="space-y-6 h-full p-6  border-t-1 border-r-1 border-t-[#E29578] border-r-[#E29578]">
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

      <div className=" w-full  mr-60">
        <div className=" flex space-x-20 justify-end ">
          <div className="relative">
            <input
              placeholder="Search"
              className="w-100 h-10 border border-[#2772BD] text-center py-2 pr-10 pl-4 rounded-xl"
            />
            <i className="ri-search-line absolute right-3 top-[18px] transform -translate-y-1/2 text-[#2772BD] text-xl"></i>
          </div>

          <div className="flex space-x-4 text-[#2772BD] text-2xl">
            <i className="ri-home-6-fill text-3xl"></i>
            <i className="ri-account-circle-fill text-3xl"></i>
          </div>
        </div>

        <div
          className="flex space-x-4 w-full ml-20 items-center
        "
        >
          <i className="ri-home-6-fill text-3xl text-[#D4A373]"></i>
          <i class="ri-arrow-drop-right-line text-3xl"></i>
          <p className="text-lg text-[#D4A373]">Resign for Insurance</p>
        </div>

        <div className="flex space-x-20 ml-20 mt-5 justify-center border-b-1 border-b-[#D9D9D9]">
          <p className="text-lg p-3 border-b-2 border-b-[#E29578] z-10">
            Asset Information
          </p>
          <p className="text-lg p-3 ">Personal Information</p>
          <p className="text-lg p-3 ">Payment & Confirmation</p>
        </div>

        <div className="ml-20 space-y-10">
          <p>Enter Property Information</p>

          <div className="flex space-x-4">
            <p>Insurance Type:</p>
          </div>
          <div className="flex space-x-4">
            <p>Property Address:</p>
            <input></input>
          </div>
          <div className="flex space-x-4">
            <p>
              Area (m<sup>2</sup>):
            </p>
            <input></input>
          </div>
          <div className="flex space-x-4">
            <p>Construction Materials:</p>
          </div>
          <div className="flex space-x-4">
            <p>Estimated Property Value:</p>
            <input placeholder="USD" className="text-right p-2"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetInformation;
