import React from "react";
import BackgroundLogin from "../assets/Background Login.png";

function Login() {
  return (
    <div className="flex flex-row w-screen h-screen bg-white">
      <div className="basis-8/15 text-amber-50 bg-white"></div>

      <div
        className="bg-[#dbdbf1] "
        style={{ backgroundImage: `url(${BackgroundLogin})`, width: "26%" }}
      ></div>
    </div>
  );
}

export default Login;
