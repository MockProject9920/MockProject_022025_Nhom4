import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { FaUsers, FaArchive, FaCreditCard, FaReceipt, FaStar, FaChevronDown } from "react-icons/fa";
import { TbContract } from "react-icons/tb";
import { HiBuildingOffice2 } from "react-icons/hi2";

const LinkAdmin = [
    { name: "Dashboard", link: "/", icon: <AiFillDashboard /> },
    { name: "User Management", link: "/usermanager", icon: <FaUsers />, hasDropdown: true },
    { name: "Contract Manager", link: "/contract", icon: <TbContract /> },
    { name: "Insurance Product", link: "/insurance", icon: <FaArchive /> },
    { name: "Property Management", link: "/property", icon: <HiBuildingOffice2 /> },
    { name: "Payment & Invoice", link: "/payment", icon: <FaCreditCard /> },
    { name: "Claims Processing", link: "/claims", icon: <FaReceipt /> },
    { name: "Appraisers", link: "/appraisers", icon: <FaStar /> }
];

const LinkUserManager = [
    { name: "Customer", link: "/usermanager/customer" },
    { name: "Employee", link: "/usermanager/employee" },
    { name: "Role", link: "/usermanager/role" }
];

const SideBar = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const navigate = useNavigate(); // Hook điều hướng

    return (
        <div className='h-screen w-[300px] p-5 border border-gray-200 bg-[#f1f9fe]'>
            <div className='flex flex-col'>
                <ul className="space-y-4">
                    {LinkAdmin.map((data) => (
                        <li key={data.name}>
                            {data.hasDropdown ? (
                                <div
                                    className="flex items-center justify-between p-2 transition rounded-md cursor-pointer hover:bg-gray-300"
                                    onClick={() => setOpenDropdown(!openDropdown)}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className='text-2xl text-black'>{data.icon}</span>
                                        <span className={`text-lg font-medium ${openDropdown ? "active" : ""}`}>
                                            {data.name}
                                        </span>
                                    </div>
                                    {/* Icon mũi tên xoay khi mở dropdown */}
                                    <FaChevronDown className={`text-gray-600 transition-transform ${openDropdown ? "rotate-180" : ""}`} />
                                </div>
                            ) : (
                                <NavLink to={data.link} className="flex items-center gap-3 p-2 transition rounded-md cursor-pointer hover:bg-gray-300">
                                    {({ isActive }) => (
                                        <>
                                            <span className='text-2xl text-black'>{data.icon}</span>
                                            <span className={`text-lg font-medium ${isActive ? "active" : ""}`}>
                                                {data.name}
                                            </span>
                                        </>
                                    )}
                                </NavLink>
                            )}
                            {openDropdown && data.hasDropdown && (
                                <ul className="ml-10 space-y-2">
                                    {LinkUserManager.map((sub) => (
                                        <li key={sub.name} className='flex items-center gap-3'>
                                            <input
                                                className='w-4 h-4'
                                                type="radio"
                                                name="userManager"
                                                onChange={() => navigate(sub.link)}
                                            />
                                            <NavLink to={sub.link} className="text-lg font-semibold hover:text-red-500">
                                                {sub.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
