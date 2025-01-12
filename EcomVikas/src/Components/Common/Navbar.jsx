import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex container border-2 justify-evenly items-center p-2 bg-red-200 ml-28">
      <div>
        <NavLink className="bg-red-400 px-2 py-1 rounded text-white" to="/">
          Home
        </NavLink>
      </div>
      <NavLink
        className="bg-red-400 px-2 py-1 rounded text-white"
        to="/Products"
      >
        Products
      </NavLink>
      <NavLink className="bg-red-400 px-2 py-1 rounded text-white" to="/About">
        About
      </NavLink>
      <NavLink
        className="bg-red-400 px-2 py-1 rounded text-white"
        to="/Profile"
      >
        Profile
      </NavLink>
      <NavLink
        className="bg-red-400 px-2 py-1 rounded text-white"
        to="/Register"
      >
        Register
      </NavLink>
    </div>
  );
};

export default Navbar;
