import React, { useEffect, useState } from 'react';
import EmployeeItem from './EmployeeItem';
import axios from 'axios';
import { FaAngleRight, FaUsers } from 'react-icons/fa';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { TbArrowsSort } from 'react-icons/tb';

const Employee = () => {
    const [employee, setEmployee] = useState([])
    const getEmployee = async () => {
        try {
            const res = await axios.get("  http://localhost:3000/Employee")
            setEmployee(res.data)
        } catch (err) {
            console.log("Lỗi", err)
        }
    }
    useEffect(() => {
        getEmployee()
    }, [])
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='flex gap-5'>
                        <FaUsers className='w-8 h-8' />
                        <FaAngleRight className='w-8 h-8' />
                    </div>
                    <p className='text-2xl font-semibold'>Employee Management</p>
                </div>
                <div className='w-[200px] gap-3 cursor-pointer h-[60px] border border-gray-300 bg-[#60B9F9] rounded-xl flex justify-center items-center'>
                    <AiOutlinePlusCircle className='w-6 h-6 text-white' />
                    <p className='text-xl text-white'>New User</p>
                </div>
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
                                <TbArrowsSort className="cursor-pointer" />Role
                            </div>
                        </th>
                        <th className="px-4 py-2 text-center border-b">
                            <div className="flex items-center justify-center gap-1">
                                <TbArrowsSort className="cursor-pointer" />Member since
                            </div>
                        </th>
                        <th className="px-4 py-2 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((item, index) => (
                        <EmployeeItem key={index} item={item} />
                    ))}
                </tbody>
            </table>
            <div className='flex items-center justify-end gap-3 mt-40 mr-[20px] '>
                <button className='w-[100px] cursor-pointer font-medium h-[40px] border border-gray-400 rounded-lg bg-gray-300 text-center'>
                    Previous
                </button>
                <button className='w-[100px] font-medium  cursor-pointer h-[40px] border border-gray-400 rounded-lg bg-gray-300 text-center'>
                    Next
                </button>
            </div>

        </div>
    );
};

export default Employee;