import React from "react";
import "@fontsource/playfair-display";

function AssetInformation() {
  return (
    <div className="flex space-x-0 p-10">
      <div className="w-[250px] space-y-8">
        <p className="text-4xl " style={{ fontFamily: "Playfair Display" }}>
          Fourshield Insurance
        </p>
        <div className="space-y-6 p-6 border boder-t-[#E29578] boder-r-[#E29578]">
          <div className="flex space-x-2 items-center">
            <i class="ri-circle-fill"></i>
            <p className="text-xl">Insurance</p>
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
    </div>
  );
}

export default AssetInformation;
