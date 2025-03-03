import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='pt-14'>
            <div className='flex justify-center gap-3'>
                <Link
                    to='/login'
                    type="button"
                    className="px-5 py-2 text-black border bg-blue-300 border-gray-400 rounded-xl"
                >
                    Đăng Nhập
                </Link>
                <Link
                    to='/signup'
                    type="button"
                    className="px-5 py-2 text-black bg-blue-300 border-gray-400 rounded-xl"
                >
                    Đăng Kí
                </Link>

            </div>
        </div>
    );
};

export default Home;