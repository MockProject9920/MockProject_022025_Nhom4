import React from "react";
import BackgroundLogin from "../assets/Background Login.png";
import LoginImage from "../assets/HomeImage.jpg";

function Login() {
  return (
    <div className=" flex flex-row w-screen h-screen bg-white">
      <div className="basis-1/2 text-amber-50 bg-white"></div>

      <div
        className="bg-[#F1F1F8] flex justify-center items-center"
        style={{ backgroundImage: `url(${BackgroundLogin})` }}
      >
        <div className=" w-[445px] h-[510px] border-gray-300 border-2 m-[120px]  shadow-lg rounded-lg bg-white ">
          <img src={LoginImage} className="justify-center" />
        </div>
      </div>
    </div>
  );
}

export default Login;
