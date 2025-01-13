import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" text-xl border-2 border-red-500 flex justify-evenly py-2">
        <NavLink
          className="border-2 border-red-500 px-2 bg-red-500 rounded"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="border-2 border-red-500 px-2 bg-red-500 rounded"
          to="/Quiz"
        >
          Quiz
        </NavLink>
        <NavLink
          className="border-2 border-red-500 px-2 bg-red-500 rounded"
          to="/LeaderBoard"
        >
          LeaderBoard
        </NavLink>
        <NavLink className="border-4 px-2 bg-red-500 rounded" to="/Register">
          Register
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
