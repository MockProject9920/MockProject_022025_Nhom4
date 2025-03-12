import { useState } from "react";
import BackgroundLogin from "../assets/Background Login.png";
import LoginImage from "../assets/HomeImage.jpg";
import GoogleLogo from "../assets/Google__G__logo.svg.webp";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" flex flex-row w-screen h-screen bg-white">
      <div
        className="basis-1/2 bg-white 
       "
      >
        <div className="shadow-gray-500 border-b-1 border-b-gray-400">
          <p className=" text-[#100A55] font-bold text-2xl my-8 ml-18 ">
            Estatery
          </p>
        </div>

        <div className="mt-20 ml-32 w-[352px]">
          <p className="text-4xl font-bold mb-3">Wellcome back</p>
          <p className="text-lg text-[#90959F] mb-7">
            Wellcome back! Please enter your details.
          </p>

          <p className="mb-2 font-medium">Email</p>
          <input
            type="email"
            placeholder="hi@example.com"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg bg-[#F8F8FC] text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <p className="mb-2 font-medium">Password</p>
          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-[#F8F8FC] text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <i
              className={`absolute right-3 top-3 text-gray-500 cursor-pointer ${
                showPassword ? "ri-eye-off-line" : "ri-eye-line"
              }`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
          <p className="w-full text-center text-[#9C95F4] font-medium">
            Forgot Password?
          </p>

          <button className="w-full h-10 my-4 text-white bg-[#7065F0] rounded-lg">
            Login
          </button>

          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 mb-6">
            <img src={GoogleLogo} alt="Google" className="w-5 h-5 mr-2" />
            <span className="font-medium text-black">Continue with Google</span>
          </button>

          <p className="w-full text-center text-[#90959F]">
            Don't have an account?{" "}
            <u className="text-black">Sign up for free</u>
          </p>
        </div>
      </div>

      <div
        className="bg-[#F1F1F8] flex justify-center items-center "
        style={{ backgroundImage: `url(${BackgroundLogin})` }}
      >
        <div className="p-6 w-[470px] h-[515px] border-gray-300 border-2 m-[120px]  shadow-lg rounded-lg bg-white ">
          <img
            src={LoginImage}
            className="justify-center rounded-lg  h-[212px]  object-fill w-[100%] "
          />
          <div>
            <div>
              <p className="text-xl font-bold">Beverly Springfield</p>
              <p className="text-[#90959F] ">2821 Sevilla, Palm Harbor, TX</p>
            </div>
            <div className="flex space-x-3 v">
              <p>4Beds</p>
              <p>2Bathrooms</p>
              <p>
                6x7.5m<sup>2</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
