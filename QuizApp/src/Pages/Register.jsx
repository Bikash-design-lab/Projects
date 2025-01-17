import React, { useState } from "react";
const token = Boolean(localStorage.getItem("authToken"));

const Register = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(token);
  const handleLogin = () => {
    localStorage.setItem("authToken", "Vikas");
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };
  return (
    <div className=" mt-32">
      <h1 className="text-2xl">
        {isLoggedIn ? "You are Logged in 🤩" : "You are NOT Logged in 😔"}
      </h1>

      <div className="flex justify-center gap-3 mt-5">
        {isLoggedIn ? (
          <button
            onClick={handleLogOut}
            className="border-4  px-6 py-1 font-bold text-white rounded bg-red-500 hover:bg-red-400 hover:text-black"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="border-4  px-6 py-1 font-bold text-white rounded bg-red-500 hover:bg-red-400 hover:text-black"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Register;
