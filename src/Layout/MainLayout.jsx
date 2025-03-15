import React from 'react';
import SideBar from '../components/shared/SideBar';
import Header from '../components/shared/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='flex flex-col h-screen bg-neutral-100'>
            <Header />
            <div className='flex flex-1 h-screen overflow-hidden '>
                <SideBar />
                <div className='flex-1 p-4 overflow-hidden'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
