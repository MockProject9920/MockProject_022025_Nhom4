import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between mt-2 px-8 py-8">
      <p>Showing 1 to 4 of 4 entries</p>
      <div>
        <button className="bg-gray-300 px-4 py-2 rounded mx-2">Previous</button>
        <button className="bg-gray-300 px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default Footer;
