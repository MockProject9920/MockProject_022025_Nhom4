import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const UserLayout = () => {
    return (
        <div className="user-layout">
            <Navbar />
            <div className="layout-content">
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default UserLayout;