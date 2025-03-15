import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='flex items-center justify-between h-16 px-8 bg-white'>
            <h1 className='text-2xl'>FourShield Insurance</h1>
            <div className='relative'>
                <CiSearch fontSize={20} className='absolute text-gray-400 top-2 left-3' />
                <input
                    type="text"
                    placeholder='search....'
                    className='text-sm border border-gray-200 rounded-lg w-[500px] px-3 py-1 focus:outline-none bg-gray-200 active:outline-none pr-4 pl-8' />
            </div>
            <div className='flex gap-2 text-xl'>
                <p className='text-xl'>DashBoard</p>
                <div className="w-px h-6 bg-black "></div> 
                <div className='flex items-center gap-2'>
                    <FaCircleUser />
                    <p>Admin</p>
                </div>
            </div>
        </div>
    );
};

export default Header;