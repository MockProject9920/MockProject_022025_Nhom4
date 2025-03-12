import React from "react";
import BackgroundLogin from "../assets/Background Login.png";

function Login() {
  return (
    <div className="flex flex-row w-screen h-screen bg-white">
      <div className="basis-8/15 text-amber-50 bg-amber-50"></div>

      <div
        className="basis-7/15 "
        style={{ backgroundImage: BackgroundLogin }}
      ></div>
    </div>
  );
}

export default Login;
