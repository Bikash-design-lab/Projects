import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex container border-2 justify-between items-center p-4 bg-gray-800">
      <div className="flex justify-center items-center space-x-6">
        <NavLink
          className="bg-red-400 px-4 py-2 rounded text-white hover:bg-red-600 transition duration-300"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="bg-red-400 px-4 py-2 rounded text-white hover:bg-red-600 transition duration-300"
          to="/Products"
        >
          Products
        </NavLink>
        <NavLink
          className="bg-red-400 px-4 py-2 rounded text-white hover:bg-red-600 transition duration-300"
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className="bg-red-400 px-4 py-2 rounded text-white hover:bg-red-600 transition duration-300"
          to="/Profile"
        >
          Profile
        </NavLink>
        <NavLink
          className="bg-red-400 px-4 py-2 rounded text-white hover:bg-red-600 transition duration-300"
          to="/Register"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
