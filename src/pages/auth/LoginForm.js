import React from "react";

export default function LoginForm() {
  return (
    <div class="bg-[url('https://preview.colorlib.com/theme/konato/assets/img/hero/h1_hero1.jpg.webp')] bg-cover bg-center h-screen w-full grid place-items-center">
        <div className="flex-col flex justtify-center items-center px-12 py-16 h-auto min-w-[700px] bg-white text-slate-500 text-md">
            <h1 className="text-3xl text-slate-900 font-bold mb-4">Login</h1>
            <p className="mb-4 mt-2">Enter Login details to get access</p>
            <div className="w-full space-y-2 mt-4">
                <p className="font-bold text-slate-900">Username Or Email Address</p>
                <input className="focus:outline-none border-2 py-2 px-4 w-full" type="text" placeholder="Username / Email address"/>
            </div>
            <div className="w-full space-y-2 my-4">
                <p className="font-bold text-slate-900">Password</p>
                <input className="focus:outline-none border-2 py-2 px-4 w-full" type="password" placeholder="Enter Password"/>
            </div>
            <div className="w-full flex justify-between my-4">
                <div className="flex space-x-2">
                    <input type="checkbox"/>
                    <p className="font-bold text-slate-900">Keep Me Logged In</p>
                </div>
                <p className="text-sky-500">Forgot Password?</p>
            </div>
            <div className="flex w-full justify-between items-center mt-8">
                <p>Don't have an account? <a className="text-sky-500" href="#">Sign Up</a> here</p>
                <button className="bg-cyan-400 text-white py-3 px-8">Login</button>
            </div>
        </div>
    </div>
  );
}
