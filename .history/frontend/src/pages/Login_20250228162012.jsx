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
            <i className="ri-heart-line text-2xl text-green-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
