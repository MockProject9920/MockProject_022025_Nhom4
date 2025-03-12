import React from "react";
import BackgroundLogin from "../assets/Background Login.png";
import LoginImage from "../assets/ecard-user-5228-header.jpg";

function Login() {
  return (
    <div className=" flex flex-row w-screen h-screen bg-white">
      <div className="basis-1/2 text-amber-50 bg-white"></div>

      <div
        className="bg-[#F1F1F8] flex justify-center items-center"
        style={{ backgroundImage: `url(${BackgroundLogin})` }}
      >
        <div className=" w-[470px] h-[515px] border-gray-300 border-2 m-[120px]  shadow-lg rounded-lg bg-white ">
          <img
            src={LoginImage}
            className="justify-center rounded-lg  h-[212px] m-6 object-fill w-[89%] "
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
