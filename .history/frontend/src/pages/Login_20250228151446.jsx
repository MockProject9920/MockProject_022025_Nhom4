import React from "react";
import BackgroundLogin from "../assets/Background Login.png";

function Login() {
  return (
    <div className="flex flex-row w-screen h-screen bg-white">
      <div className="basis-1/2 text-amber-50 bg-white"></div>

      <div
        className="bg-[#F1F1F8] absolute"
        style={{ backgroundImage: `url(${BackgroundLogin})` }}
      >
        <div className="w-[445px] h-[510px] border-2 relative items-center"></div>
      </div>
    </div>
  );
}

export default Login;
