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
            <p>Insurance</p>
          </div>
          <div className="flex space-x-2">
            <i class="ri-circle-fill"></i>
            <p>Personal Contract</p>
          </div>
          <div className="flex space-x-2">
            <i class="ri-circle-fill"></i>
            <p>Claims</p>
          </div>
          <div className="flex space-x-2">
            <i class="ri-circle-fill"></i>
            <p>Personal Profile</p>
          </div>
          <div className="flex space-x-2">
            <i class="ri-circle-fill"></i>
            <p>Submit a Claims</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetInformation;
