import React from 'react';
import { FaAngleRight, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewCustomer = () => {
    return (
        <div className='p-2'>
            <div className='flex items-center gap-3'>
                <div className='flex gap-5'>
                    <FaUsers className='w-8 h-8' />
                    <FaAngleRight className='w-8 h-8' />
                    <Link to="/usermanager/customer" className='text-2xl font-semibold cursor-pointer hover:underline'>
                        Customer Management
                    </Link>
                </div>
                <div className='flex gap-2'>
                    <FaAngleRight className='w-8 h-8' />
                    <p className='text-2xl font-semibold'>New Customer</p>
                </div>
            </div>

            <div className=''>
                <h1 className='mt-10 text-2xl font-medium text-center'>Customer Information</h1>
                <form className='mx-auto font-semibold h-[600px] p-12 space-y-5 text-lg max-w-[900px]'>
                    {/* Row 1: Type */}
                    <div className='flex items-center '>
                        <label className='w-1/4 '>Type(*)</label>
                        <input
                            type="text"
                            className='w-full max-w-[500px] p-2 bg-gray-300'
                            placeholder='(Drop down: Enterprise / Individual)' />
                    </div>
                    {/* Row 2: First Name - Last Name */}
                    <div className='flex gap-5'>
                        <div className='flex items-center space-x-[86px]'>
                            <label className='w-1/3 '>First Name (*)</label>
                            <input type="text" className='w-full max-w-[150px] p-2 bg-gray-300' />
                        </div>
                        <div className='flex items-center gap-3 space-x-3 ml-[50px]'>
                            <label className='w-auto'>Last Name (*)</label>
                            <input type="text" className='w-full max-w-[150px] p-2 bg-gray-300' />
                        </div>
                    </div>
                    {/* Row 3: Gender */}
                    <div className='flex items-center'>
                        <label className='w-1/4 '>Gender</label>
                        <div className='flex gap-10'>
                            <label className='flex items-center gap-2'>
                                <input
                                    className='w-4 h-4'
                                    type="radio" name="gender" /> Male
                            </label>
                            <label className='flex items-center gap-2'>
                                <input
                                    className='w-4 h-4'
                                    type="radio" name="gender" /> Female
                            </label>
                        </div>

                    </div>

                    {/* Row 4: Email */}
                    <div className='flex items-center '>
                        <label className='w-1/4 '>Email</label>
                        <input type="text" className='w-full max-w-[500px] p-2 bg-gray-300' />
                    </div>
                    {/* Row 5: Phone Number */}
                    <div className='flex items-center'>
                        <label className='w-1/4 '>Phone Number</label>
                        <input type="tel" className='w-full max-w-[500px] p-2 bg-gray-300' />
                    </div>

                    {/* Row 6: Address */}
                    <div className='flex items-center'>
                        <label className='w-1/4 '>Address</label>
                        <input type="text" className='w-full max-w-[500px] p-2 bg-gray-300' />
                    </div>
                    {/* Row 7: Date of Birth */}
                    <div className='flex items-center '>
                        <label className='w-1/4 '>Date of Birth</label>
                        <input type="date" className='w-full max-w-[500px] p-2 bg-gray-300' />
                    </div>

                    {/* Row 8: SSN/Tax ID */}
                    <div className='flex items-center '>
                        <label className='w-1/4'>SSN/Tax ID</label>
                        <input type="text" className='w-full max-w-[500px] p-2 bg-gray-300'
                            placeholder='optional....' />
                    </div>
                    {/* Row 9: Upload Image */}
                    <div className='flex items-center'>
                        <label className='w-1/4 '>Upload Image</label>
                        <input type="file" className='w-full max-w-[500px] p-2 bg-gray-300' />
                    </div>
                    <div className='flex items-center justify-center mt-10 mx-auto bg-[#E1A325] p-4 w-[150px] h-[50px] rounded-full'>
                        <button className='text-white cursor-pointer'>Save</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default NewCustomer;
