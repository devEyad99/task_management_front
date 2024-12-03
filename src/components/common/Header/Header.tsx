

import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primaryBlue text-white relative">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold">Task Manager System</h1>

        {/* Hamburger Icon */}
        <button
          className="block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-2xl">&#9776;</span>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:static bg-primaryBlue w-full lg:w-auto top-16 left-0 z-10`}
        >
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-warningYellow font-semibold hover:text-yellow-400"
                  : "text-lightGray hover:text-gray-300"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                isActive
                  ? "text-warningYellow font-semibold hover:text-yellow-400"
                  : "text-lightGray hover:text-gray-300"
              }
            >
              Tasks
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? "text-warningYellow font-semibold hover:text-yellow-400"
                  : "text-lightGray hover:text-gray-300"
              }
            >
              Users
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Spacer for Dropdown Menu */}
      {isMenuOpen && (
        <div className="h-40 lg:h-0 bg-primaryBlue transition-all"></div>
      )}
    </header>
  );
}