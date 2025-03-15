import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { IoEye } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

const EmployeeItem = ({item}) => {
    return (
        <tr className='items-center justify-center border-b'>
            <td className="px-4 py-2 text-center ">{item.id}</td>
            <td className="px-4 py-2 text-center ">{item.name}</td>
            <td className="px-4 py-2 text-center ">{item.email}</td>
            <td className="px-4 py-2 text-center ">{item.role}</td>
            <td className="px-4 py-2 text-center ">{item.member_since}</td>
            <td className="px-4 py-2 ">
                <div className='flex items-center justify-center gap-2 '>
                    <button className='bg-green-300 w-[26px] h-[28px] rounded-lg flex justify-center items-center'>
                        <IoEye className='w-5 h-5'></IoEye>
                    </button>
                    <button className='bg-[#8FC5FB] w-[26px] flex justify-center items-center h-[28px]  rounded-lg'>
                        <FiEdit className='w-5 h-5 '></FiEdit>
                    </button>
                    <button className='bg-red-500 w-[26px] h-[28px] flex justify-center items-center rounded-lg'>
                        <MdDelete className='w-5 h-5'></MdDelete>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default EmployeeItem;