import React, { useEffect, useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import CustomerItem from '../Customer/CustomerItem';
import { TbArrowsSort } from "react-icons/tb";
import { Link, Outlet, useLocation } from 'react-router-dom';

const Customer = () => {
    const [customer, setCustomer] = useState([]);
    const location = useLocation();

    const getCustomer = async () => {
        try {
            const res = await axios.get("http://localhost:3000/Customer");
            setCustomer(res.data);
        } catch (err) {
            console.log("Lỗi", err);
        }
    };

    useEffect(() => {
        getCustomer();
    }, []);

    return (
        <div>
            {/* Chỉ hiển thị danh sách khi không ở trang New Customer */}
            {!location.pathname.includes("/usermanager/customer/new") && (
                <>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='flex gap-5'>
                                <FaUsers className='w-8 h-8' />
                                <FaAngleRight className='w-8 h-8' />
                            </div>
                            <p className='text-2xl font-semibold'>Customer Management</p>
                        </div>
                        <Link to="new" className='w-[200px] gap-3 cursor-pointer h-[60px] border border-gray-300 bg-[#60B9F9] rounded-xl flex justify-center items-center'>
                            <AiOutlinePlusCircle className='w-6 h-6 text-white' />
                            <p className='text-xl text-white'>New Customer</p>
                        </Link>
                    </div>
                    <table className='w-full mt-5 bg-gray-100 '>
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-center border-b">STT</th>
                                <th className="px-4 py-2 text-left border-b">
                                    <div className="flex items-center justify-center gap-1 text-left">
                                        <TbArrowsSort className="cursor-pointer" />Name
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-center border-b">
                                    <div className="flex items-center justify-center gap-1">
                                        <TbArrowsSort className="cursor-pointer" />Email
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-center border-b">
                                    <div className="flex items-center justify-center gap-1">
                                        <TbArrowsSort className="cursor-pointer" />Type
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-center border-b">
                                    <div className="flex items-center justify-center gap-1">
                                        <TbArrowsSort className="cursor-pointer" />Address
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-left border-b">Password</th>
                                <th className="px-4 py-2 text-left border-b">Phone</th>
                                <th className="px-4 py-2 text-center border-b">Status</th>
                                <th className="px-4 py-2 text-center border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customer.map((item, index) => (
                                <CustomerItem key={index} item={item} />
                            ))}
                        </tbody>
                    </table>
                    <div className='flex items-center justify-end gap-3 mt-40 mr-[20px] '>
                        <button className='w-[100px] cursor-pointer font-medium h-[40px] border border-gray-400 rounded-lg bg-gray-300 text-center'>
                            Previous
                        </button>
                        <button className='w-[100px] font-medium cursor-pointer h-[40px] border border-gray-400 rounded-lg bg-gray-300 text-center'>
                            Next
                        </button>
                    </div>
                </>
            )}
            <Outlet />
        </div>
    );
};

export default Customer;
