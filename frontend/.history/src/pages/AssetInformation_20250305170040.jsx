// import React, { useState } from "react";
// import "@fontsource/playfair-display";

// function AssetInformation() {
//   return (
//     <div className="flex space-x-0 py-10 h-screen w-screen">
//       <div className={`w-[280px] space-y-8 h-full fi`}>
//         <p
//           className="text-4xl text-[#2772BD] font-bold pl-10"
//           style={{ fontFamily: "Playfair Display" }}
//         >
//           Fourshield Insurance
//         </p>
//         <div className="space-y-6 h-full p-6  border-t-1 border-r-1 border-t-[#E29578] border-r-[#E29578]">
//           <div className="flex space-x-2 items-center">
//             <i class="ri-circle-fill text-[#E29578]"></i>
//             <p className="text-xl text-[#E29578]">Insurance</p>
//           </div>
//           <div className="flex space-x-2 items-center">
//             <i class="ri-circle-fill"></i>
//             <p className="text-xl">Personal Contract</p>
//           </div>
//           <div className="flex space-x-2 items-center">
//             <i class="ri-circle-fill"></i>
//             <p className="text-xl">Claims</p>
//           </div>
//           <div className="flex space-x-2 items-center">
//             <i class="ri-circle-fill"></i>
//             <p className="text-xl">Personal Profile</p>
//           </div>
//           <div className="flex space-x-2 items-center">
//             <i class="ri-circle-fill"></i>
//             <p className="text-xl">Submit a Claims</p>
//           </div>
//         </div>
//       </div>

//       <div className=" w-full  mr-60">
//         <div className=" flex space-x-20 justify-end ">
//           <div className="relative">
//             <input
//               placeholder="Search"
//               className="w-100 h-10 border border-[#2772BD] text-center py-2 pr-10 pl-4 rounded-xl"
//             />
//             <i className="ri-search-line absolute right-3 top-[18px] transform -translate-y-1/2 text-[#2772BD] text-xl"></i>
//           </div>

//           <div className="flex space-x-4 text-[#2772BD] text-2xl">
//             <i className="ri-home-6-fill text-3xl"></i>
//             <i className="ri-account-circle-fill text-3xl"></i>
//           </div>
//         </div>

//         <div
//           className="flex space-x-4 w-full ml-20 items-center
//         "
//         >
//           <i className="ri-home-6-fill text-3xl text-[#D4A373]"></i>
//           <i class="ri-arrow-drop-right-line text-3xl"></i>
//           <p className="text-lg text-[#D4A373]">Resign for Insurance</p>
//         </div>

//         <div className="flex space-x-20 ml-20 mt-5 justify-center border-b-1 border-b-[#D9D9D9]">
//           <p className="text-lg p-3 border-b-2 border-b-[#E29578] z-10">
//             Asset Information
//           </p>
//           <p className="text-lg p-3 ">Personal Information</p>
//           <p className="text-lg p-3 ">Payment & Confirmation</p>
//         </div>

//         <div className="ml-20 mt-8 space-y-7">
//           <p className="font-medium">Enter Property Information</p>

//           <div className="flex space-x-4">
//             <p className="font-medium">Insurance Type:</p>
//             <select className="h-10 p-1 ml-57 rounded-xl bg-[#D4A373]">
//               <option className="bg-white" value="Home">
//                 Home
//               </option>
//               <option className="bg-white" value="Apartment">
//                 Apartment
//               </option>
//               <option className="bg-white" value="Commercial">
//                 Commercial
//               </option>
//             </select>
//           </div>
//           <div className="flex space-x-4 w-full justify-between">
//             <p className="font-medium">Property Address:</p>
//             <input className="border-1 w-150 h-10"></input>
//           </div>
//           <div className="flex space-x-4 w-full justify-between">
//             <p className="font-medium">
//               Area (m<sup>2</sup>):
//             </p>
//             <input className="border-1 w-150 h-10"></input>
//           </div>
//           <div className="flex space-x-4">
//             <p className="font-medium">Construction Materials:</p>
//             <select className="h-10 p-1 ml-44 rounded-xl bg-[#D4A373]">
//               <option className="bg-white" value="Concrete">
//                 Concrete
//               </option>
//               <option className="bg-white" value="ApaBrickrtment">
//                 Brick
//               </option>
//               <option className="bg-white" value="Wood">
//                 Wood
//               </option>
//               <option className="bg-white" value="Other">
//                 Other
//               </option>
//             </select>
//           </div>
//           <div className="flex space-x-4 w-full justify-between">
//             <p className="font-medium">Estimated Property Value:</p>
//             <input
//               placeholder="USD"
//               className="text-right p-2 border-1 w-150 h-10"
//             ></input>
//           </div>
//         </div>

//         <div className="w-full mt-8 ml-6 text-center">
//           <button className="bg-[#91A8D0] p-2 w-30 rounded-xl">
//             Continute
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AssetInformation;

// import React, { useState } from "react";
// import "@fontsource/playfair-display";

// function AssetInformation() {
//   return (
//     <div className="flex flex-col md:flex-row py-10 h-screen w-screen">
//       {/* Sidebar */}
//       <div className="w-full md:w-[280px] space-y-8 h-full md:h-auto p-6 border-t border-r md:border-t-0 md:border-r-[#E29578]">
//         <p
//           className="text-4xl text-[#2772BD] font-bold text-center md:text-left"
//           style={{ fontFamily: "Playfair Display" }}
//         >
//           Fourshield Insurance
//         </p>
//         <div className="space-y-6">
//           {[
//             "Insurance",
//             "Personal Contract",
//             "Claims",
//             "Personal Profile",
//             "Submit a Claims",
//           ].map((item, index) => (
//             <div key={index} className="flex space-x-2 items-center">
//               <i className="ri-circle-fill text-[#E29578]"></i>
//               <p className="text-xl">{item}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="w-full px-4 md:px-20">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
//           <div className="relative w-full md:w-auto">
//             <input
//               placeholder="Search"
//               className="w-full md:w-100 h-10 border border-[#2772BD] text-center py-2 pr-10 pl-4 rounded-xl"
//             />
//             <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2772BD] text-xl"></i>
//           </div>
//           <div className="flex space-x-4 text-[#2772BD] text-2xl">
//             <i className="ri-home-6-fill text-3xl"></i>
//             <i className="ri-account-circle-fill text-3xl"></i>
//           </div>
//         </div>

//         {/* Breadcrumb */}
//         <div className="flex space-x-4 items-center text-[#D4A373]">
//           <i className="ri-home-6-fill text-3xl"></i>
//           <i className="ri-arrow-drop-right-line text-3xl"></i>
//           <p className="text-lg">Resign for Insurance</p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center border-b border-b-[#D9D9D9] mt-5">
//           {[
//             "Asset Information",
//             "Personal Information",
//             "Payment & Confirmation",
//           ].map((tab, index) => (
//             <p
//               key={index}
//               className={`text-lg p-3 ${
//                 index === 0 ? "border-b-2 border-b-[#E29578]" : ""
//               }`}
//             >
//               {tab}
//             </p>
//           ))}
//         </div>

//         {/* Form */}
//         <div className="mt-8 space-y-7">
//           <p className="font-medium">Enter Property Information</p>

//           <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
//             <p className="font-medium">Insurance Type:</p>
//             <select className="h-10 p-1 rounded-xl bg-[#D4A373]">
//               {["Home", "Apartment", "Commercial"].map((type, index) => (
//                 <option key={index} className="bg-white" value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {["Property Address", "Area (m²)", "Estimated Property Value"].map(
//             (label, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0"
//               >
//                 <p className="font-medium">{label}:</p>
//                 <input
//                   className="border w-full md:w-150 h-10 p-2"
//                   placeholder={
//                     label === "Estimated Property Value" ? "USD" : ""
//                   }
//                 ></input>
//               </div>
//             )
//           )}

//           <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
//             <p className="font-medium">Construction Materials:</p>
//             <select className="h-10 p-1 rounded-xl bg-[#D4A373]">
//               {["Concrete", "Brick", "Wood", "Other"].map((material, index) => (
//                 <option key={index} className="bg-white" value={material}>
//                   {material}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Button */}
//         <div className="w-full mt-8 text-center">
//           <button className="bg-[#91A8D0] p-2 w-30 rounded-xl">Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AssetInformation;

import React, { useState } from "react";
import "@fontsource/playfair-display";

function AssetInformation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      {/* Nút mở sidebar trên mobile */}
      <button
        className="md:hidden p-4 text-2xl text-[#2772BD]"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <i className="ri-menu-line"></i>
      </button>

      {/* Sidebar */}
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
      <div className="w-full p-6 md:ml-[280px]">
        <div className="flex justify-end space-x-4">
          <div className="relative">
            <input
              placeholder="Search"
              className="w-40 md:w-100 h-10 border border-[#2772BD] text-center py-2 pr-10 pl-4 rounded-xl"
            />
            <i className="ri-search-line absolute right-3 top-[18px] text-[#2772BD] text-xl"></i>
          </div>
          <div className="flex space-x-4 text-[#2772BD] text-2xl">
            <i className="ri-home-6-fill text-3xl"></i>
            <i className="ri-account-circle-fill text-3xl"></i>
          </div>
        </div>

        <div className="flex space-x-4 items-center mt-6">
          <i className="ri-home-6-fill text-3xl text-[#D4A373]"></i>
          <i className="ri-arrow-drop-right-line text-3xl"></i>
          <p className="text-lg text-[#D4A373]">Resign for Insurance</p>
        </div>

        <div className="flex space-x-6 mt-6 border-b border-[#D9D9D9]">
          {[
            "Asset Information",
            "Personal Information",
            "Payment & Confirmation",
          ].map((tab, index) => (
            <p
              key={index}
              className="text-lg p-3 border-b-2 border-transparent hover:border-[#E29578] cursor-pointer"
            >
              {tab}
            </p>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          <p className="font-medium">Enter Property Information</p>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <p className="font-medium">Insurance Type:</p>
            <select className="h-10 p-1 rounded-xl bg-[#D4A373] w-full md:w-auto">
              {["Home", "Apartment", "Commercial"].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="font-medium">Property Address:</p>
            <input className="border p-2 w-full md:w-150 h-10" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="font-medium">Area (m²):</p>
            <input className="border p-2 w-full md:w-150 h-10" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <p className="font-medium">Construction Materials:</p>
            <select className="h-10 p-1 rounded-xl bg-[#D4A373] w-full md:w-auto">
              {["Concrete", "Brick", "Wood", "Other"].map((material) => (
                <option key={material} value={material}>
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
