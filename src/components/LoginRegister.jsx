import React, { useState } from "react";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // Mặc định là đăng nhập

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center w-full"
      style={{
        backgroundImage:
          "url('https://data.webnhiepanh.com/wp-content/uploads/2020/11/23145228/dps_interview-1.jpg')",
      }}
    >
      {/* Form Container */}
      <div
        className="bg-white p-10 rounded-lg shadow-lg w-[650px] font-jost"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <p className="text-gray-500 text-center mb-6">
          {isLogin
            ? "Enter Login details to get access"
            : "Create your account to get full access"}
        </p>

        {/* Form */}
        <form>
          {!isLogin && (
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full p-3 border border-gray-300 mb-4 focus:outline-blue-500"
              />
            </div>
          )}

          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-3 border border-gray-300  mb-4 focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 border border-gray-300 mb-4 focus:outline-blue-500"
            />
          </div>

          {isLogin && (
            <div className="flex items-center mb-4 justify-between">
              <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                />
                <label htmlFor="rememberMe" className="ml-2 text-gray-700">
                  Keep Me Logged In
                </label>
              </div>
              <a className="text-blue-500" href="#">
                Forgot Password?
              </a>
            </div>
          )}

          {!isLogin && (
            <div>
              <label className="block font-semibold mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 cursor-pointer transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Chuyển đổi giữa Đăng ký & Đăng nhập */}
        <p className="text-center mt-4 text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            className="text-blue-500 hover:underline ml-1 cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up here" : "Login here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
