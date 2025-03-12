import React, { useState } from "react";
import "@fontsource/playfair-display";

function AssetInformation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      <button
        className="md:hidden p-4 text-2xl text-[#2772BD]"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <i className="ri-menu-line"></i>
      </button>

      <div
        className={`fixed md:static top-0 left-0 h-full w-[280px] bg-white  p-6 transition-transform duration-300 
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <button
          className="md:hidden text-2xl text-[#E29578] mb-4"
          onClick={() => setIsSidebarOpen(false)}
        >
          <i className="ri-close-line"></i>
        </button>
        <p
          className="text-4xl text-[#2772BD] font-bold pl-10 mb-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Fourshield Insurance
        </p>
        <div className="space-y-6 h-full p-6 border-t border-r border-[#E29578]">
          {[
            "Insurance",
            "Personal Contract",
            "Claims",
            "Personal Profile",
            "Submit a Claims",
          ].map((item, index) => (
            <div key={index} className="flex space-x-2 items-center">
              <i className="ri-circle-fill text-[#E29578]"></i>
              <p className="text-xl">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="w-full p-6 ">
        <div className="flex justify-end space-x-20">
          <div className="relative ">
            <input
              placeholder="Search"
              className="w-40 md:w-100 h-10 border border-[#2772BD] text-center py-2 pr-10 pl-4 rounded-xl"
            />
            <i className="ri-search-line absolute right-3 top-[8px] text-[#2772BD] text-xl"></i>
          </div>
          <div className="flex space-x-4 text-[#2772BD] text-2xl">
            <i className="ri-home-6-fill text-3xl"></i>
            <i className="ri-account-circle-fill text-3xl"></i>
          </div>
        </div>

        <div className="flex space-x-4 items-center mt-6 ml-20">
          <i className="ri-home-6-fill text-3xl text-[#D4A373]"></i>
          <i className="ri-arrow-drop-right-line text-3xl"></i>
          <p className="text-lg text-[#D4A373]">Resign for Insurance</p>
        </div>

        <div className="flex space-x-20 ml-20 mt-5 justify-center border-b-1 border-b-[#D9D9D9]">
          <p className="text-lg p-3 border-b-2 border-b-[#E29578] z-10">
            Asset Information
          </p>
          <p className="text-lg p-3 ">Personal Information</p>
          <p className="text-lg p-3 ">Payment & Confirmation</p>
        </div>

        <div className="mt-8 space-y-6 ml-20">
          <p className="font-medium">Enter Property Information</p>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <p className="font-medium">Insurance Type:</p>
            <select className="h-10 p-1 ml-20 rounded-xl bg-[#D4A373] w-full md:w-auto">
              {["Home", "Apartment", "Commercial"].map((type) => (
                <option className="bg-white" key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
            <p className="font-medium">Property Address:</p>
            <input className="border p-2 w-full mr-20 md:w-150 h-10" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="font-medium">Area (m²):</p>
            <input className="border p-2 w-full md:w-150 h-10" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <p className="font-medium">Construction Materials:</p>
            <select className="h-10 p-1 rounded-xl bg-[#D4A373] w-full md:w-auto">
              {["Concrete", "Brick", "Wood", "Other"].map((material) => (
                <option className="bg-white" key={material} value={material}>
                  {material}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="font-medium">Estimated Property Value:</p>
            <input
              placeholder="USD"
              className="border p-2 text-right w-full md:w-150 h-10"
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-[#91A8D0] p-2 w-40 rounded-xl">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default AssetInformation;
