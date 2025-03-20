/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import HeaderUser from "../components/Layout/Header/HeaderUser";
import SidebarUser from "../components/Layout/Sidebar/SidebarUser";
const UserLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <SidebarUser />

            {/* Phần nội dung chính */}
            <div className="flex-1 flex flex-col">
                <HeaderUser />

                {/* Nội dung thay đổi */}
                <main className="flex-1 p-4 sm:mt-[46px] mt-[132px] md:ml-64">{children}</main>
            </div>
        </div>
    );
};


export default UserLayout
