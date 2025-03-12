import React from "react";
import "@fontsource/playfair-display";

function AssetInformation() {
  return (
    <div className="flex space-x-0 px-10">
      <div>
        <p className="text-4xl " style={{ fontFamily: "Playfair Display" }}>
          Fourshield Insurance
        </p>
        <div>
          <p>Insurance</p>
          <p>Personal Contract</p>
          <p>Claims</p>
          <p>Personal Profile</p>
          <p>Submit a Claims</p>
        </div>
      </div>
    </div>
  );
}

export default AssetInformation;
