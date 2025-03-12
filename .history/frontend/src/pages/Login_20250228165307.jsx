import React from "react";
import BackgroundLogin from "../assets/Background Login.png";
import LoginImage from "../assets/HomeImage.jpg";

function Login() {
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
          <p className="text-3xl font-medium">Wellcome back</p>
          <p>Wellcome back! Please enter your details.</p>
          <p>Email</p>
          <input
            type="email"
            placeholder="hi@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-[#F8F8FC] text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
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
            <div>
              <i className="ri-hotel-bed-line"> 4 Beds</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
