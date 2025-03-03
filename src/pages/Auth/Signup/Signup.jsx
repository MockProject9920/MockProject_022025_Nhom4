import React, { useState } from 'react';
import { PiEye, PiEyeSlash } from "react-icons/pi";
import LoginImg from '../../../assets/Images/Login.jpg';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    return (
        <div className='relative h-screen'>
            {/* Ảnh nền */}
            <img className='absolute inset-0 object-cover w-full h-full' src={LoginImg} alt="" />

            {/* Form login */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white p-8 rounded-lg shadow-lg w-1/2 h-[600px]'>
                <h1 className='text-2xl font-bold text-black text-center'>Sign Up</h1>
                <p className='mt-2 text-gray-500 text-center'>Create your account to get full access</p>

                <form className='mt-4 space-y-3'>
                    <label className='block mb-2 text-gray-500'>Full name</label>
                    <input type="text" name="name"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='p-3 w-full border border-gray-400 rounded-lg'
                        placeholder='Username / Email Address.'
                    />
                    <div>
                        <label className='block mb-2 text-gray-500'>Email Address</label>
                        <input type="email" name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-3 w-full border border-gray-400 rounded-lg'
                            placeholder='Enter Email Address.'
                        />
                    </div>
                    <div className='relative mt-3'>
                        <label className='block mb-2 text-gray-500'>Password</label>
                        <input type={isShowPassword ? "text" : "password"} name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='p-3 w-full border border-gray-400 rounded-lg'
                            placeholder='Enter password'
                        />
                        {errors?.password && <div className='pt-2 text-sm text-rose-500'>{errors.password}</div>}
                        <div className='absolute top-12 right-4 cursor-pointer'>
                            {isShowPassword ? (
                                <PiEye className='w-6 h-6' onClick={() => setIsShowPassword(false)} />
                            ) : (
                                <PiEyeSlash className='w-6 h-6' onClick={() => setIsShowPassword(true)} />
                            )}
                        </div>
                    </div>
                    <div className='relative mt-3'>
                        <label className='block mb-2 text-gray-500'>Confirm Password</label>
                        <input type={isShowConfirmPassword ? "text" : "password"} name='confirmPassword'
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            className='p-3 w-full border border-gray-400 rounded-lg'
                            placeholder='Confirm Password'
                        />
                        {errors?.password && <div className='pt-2 text-sm text-rose-500'>{errors.password}</div>}
                        <div className='absolute top-12 right-4 cursor-pointer'>
                            {isShowConfirmPassword ? (
                                <PiEye className='w-6 h-6' onClick={() => setIsShowConfirmPassword(false)} />
                            ) : (
                                <PiEyeSlash className='w-6 h-6' onClick={() => setIsShowConfirmPassword(true)} />
                            )}
                        </div>
                    </div>
                    
                    <div className="pt-10 flex justify-between items-center">
                        <div className=' flex gap-1 '>
                            <p>Already have an account?</p>
                            <Link
                                to='/Login'
                                className='text-blue-300'> Login<span className='text-black'> here</span></Link>
                        </div>
                        <button className='p-3 w-[100px] bg-blue-500 text-white cursor-pointer rounded-lg'>
                            Sign Up
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
