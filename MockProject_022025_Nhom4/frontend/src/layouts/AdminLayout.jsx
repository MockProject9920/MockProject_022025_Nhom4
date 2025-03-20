import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <Navbar />
            <div className="admin-content">
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;