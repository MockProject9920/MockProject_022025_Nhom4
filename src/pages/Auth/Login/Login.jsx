import React, { useState } from 'react';
import { PiEye, PiEyeSlash } from "react-icons/pi";
import LoginImg from '../../../assets/Images/Login.jpg';
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    return (
        <div className='relative h-screen'>
            {/* Ảnh nền */}
            <img className='absolute inset-0 object-cover w-full h-full' src={LoginImg} alt="" />

            {/* Form login */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white p-8 rounded-lg shadow-lg w-1/2 h-[600px]'>
                <h1 className='text-2xl font-bold text-black text-center'>Login</h1>
                <p className='mt-2 text-gray-500 text-center'>Enter Login details to get access</p>

                <form className='mt-4'>
                    <label className='block mb-2 text-gray-500'>Username or Email Address</label>
                    <input type="email" name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='p-3 w-full border border-gray-400 rounded-lg'
                        placeholder='Username / Email Address.'
                    />

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
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2 mt-3'>
                            <input type="checkbox" id="keepLoggedIn" className='w-4 h-4' />
                            <label htmlFor="keepLoggedIn" className='text-gray-600 cursor-pointer'>Keep me logged in</label>
                        </div>
                        <p className='mt-3 text-right text-blue-600 cursor-pointer'>Quên mật khẩu?</p>
                    </div>
                    <div className="pt-10 flex justify-between items-center">
                        <div className=' flex gap-1 '>
                            <p>Don’t have an account?</p>
                            <Link
                                to='/signup'
                                className='text-blue-300'> Sign Up<span className='text-black'> here</span></Link>
                        </div>
                        <button className='p-3 w-[100px] bg-blue-500 text-white cursor-pointer rounded-lg'>
                            Login
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
