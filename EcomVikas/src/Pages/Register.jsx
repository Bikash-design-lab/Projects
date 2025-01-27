import React, { useState } from "react";
const token = Boolean(localStorage.getItem("authToken")); // string
const Register = () => {
  const [isLogedin, setIsLogedIn] = useState(token);
  const handleLogin = () => {
    localStorage.setItem("authToken", "vikash");
    setIsLogedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLogedIn(false);
  };
  return (
    <>
      <h1 className="text-6xl text-center">Welcome users</h1>
      <h1 className="mt-20 text-2xl text-center ">
        {isLogedin ? "You are Logged in 🤩" : "You are NOT Logged in 😔"}
      </h1>
      <div className=" flex justify-center  gap-1 mt-4">
        {isLogedin ? (
          <button
            className="border-2 border-red-600 px-4 py-2  bg-red-500 text-white  hover:bg-red-400 hover:text-black "
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="border-2 border-red-600 px-4 py-2 bg-red-500 text-white hover:bg-red-400 hover:text-black"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default Register;
