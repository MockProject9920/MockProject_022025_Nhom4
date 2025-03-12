import React from "react";
import "@fontsource/playfair-display";

function AssetInformation() {
  return (
    <div className="flex space-x-0 p-10">
      <div className="w-[250px]">
        <p className="text-4xl " style={{ fontFamily: "Playfair Display" }}>
          Fourshield Insurance
        </p>
        <div>
          <div className="flex space-x-2">
            <i class="ri-circle-fill"></i>
            <p className="text-xl font-medium">Insurance</p>
          </div>
          <div className="flex space-x-2">
            <i class="ri-circle-fill"></i>
            <p className="text-xl font-medium">Personal Contract</p>
          </div>
          <div className="flex space-x-2">
            <i class="ri-circle-fill"></i>
            <p className="text-xl font-medium">Claims</p>
          </div>
          <div className="flex space-x-2">
            <i class="ri-circle-fill"></i>
            <p className="text-xl font-medium">Personal Profile</p>
          </div>
          <div className="flex space-x-2">
            <i class="ri-circle-fill"></i>
            <p className="text-xl font-medium">Submit a Claims</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetInformation;
