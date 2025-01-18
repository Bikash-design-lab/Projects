import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyles =
    "text-white hover:bg-red-500 px-4 py-2 rounded transition-colors duration-200";

  return (
    <nav className="bg-red-200 shadow-md mx-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand - visible on all screens */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="
          text-2xl
          font-extrabold
          bg-gradient-to-r from-red-600 to-red-400
          text-transparent bg-clip-text
          hover:from-red-500 hover:to-red-300
          transition-colors duration-300
          flex items-center gap-2
          p-2 rounded-lg
          hover:shadow-lg
          transform hover:scale-105
          transition-transform duration-200
        "
            >
              <span className="text-red-600">Nex</span>
              <span className="text-gray-800">Buy</span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-red-600 hover:text-red-800 focus:outline-none p-2"
            >
              {/* Hamburger icon */}
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transform transition-all duration-200 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-200 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transform transition-all duration-200 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/" className={navLinkStyles + " bg-red-400"}>
              Home
            </NavLink>
            <NavLink to="/Products" className={navLinkStyles + " bg-red-400"}>
              Products
            </NavLink>
            <NavLink to="/About" className={navLinkStyles + " bg-red-400"}>
              About
            </NavLink>
            <NavLink to="/Profile" className={navLinkStyles + " bg-red-400"}>
              Profile
            </NavLink>
            <NavLink to="/Register" className={navLinkStyles + " bg-red-400"}>
              Register
            </NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "max-h-96" : "max-h-0"
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className="block bg-red-400 rounded px-3 py-2 text-white font-medium hover:bg-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/Products"
              className="block bg-red-400 rounded px-3 py-2 text-white font-medium hover:bg-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/About"
              className="block bg-red-400 rounded px-3 py-2 text-white font-medium hover:bg-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/Profile"
              className="block bg-red-400 rounded px-3 py-2 text-white font-medium hover:bg-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </NavLink>
            <NavLink
              to="/Register"
              className="block bg-red-400 rounded px-3 py-2 text-white font-medium hover:bg-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
