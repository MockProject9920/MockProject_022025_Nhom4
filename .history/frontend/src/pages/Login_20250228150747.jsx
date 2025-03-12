import React from "react";
import BackgroundLogin from "../assets/Background Login.png";

function Login() {
  return (
    <div className="flex flex-row w-screen h-screen bg-white">
      <div className="basis-8/15 text-amber-50 bg-amber-50"></div>

      <div
        className="bg-[#F7F7FD] "
        style={{ backgroundImage: `url(${BackgroundLogin})`, width: "26%" }}
      ></div>
    </div>
  );
}

export default Login;
