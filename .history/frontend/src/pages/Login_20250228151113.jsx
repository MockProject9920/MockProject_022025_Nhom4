import React from "react";
import BackgroundLogin from "../assets/Background Login.png";

function Login() {
  return (
    <div className="flex flex-row w-screen h-screen bg-white">
      <div className="basis-8/15 text-amber-50 bg-white"></div>

      <div
        className="bg-[#F1F1F8] "
        style={{ backgroundImage: `url(${BackgroundLogin})` }}
      >
        <div className="w-[445px] h-[510px] border-2"></div>
      </div>
    </div>
  );
}

export default Login;
