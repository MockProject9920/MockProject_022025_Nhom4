import React from 'react';
import SideBar from '../components/shared/SideBar';
import Header from '../components/shared/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen overflow-y-auto bg-neutral-100'>
            <Header />
            <div className='flex flex-1 min-h-screen overflow-hidden'>
                <SideBar />
                <div className='flex-1 p-4 mb-30'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
