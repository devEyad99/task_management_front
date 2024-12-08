import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { actLogout } from "../../../store/Auth/authSlice";
import Searchbar from "../Searchbar/Searchbar";
import ConfirmModal from "../Modal/ConfirmModal";

export default function Header() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(actLogout());
    setIsLogoutModalOpen(false);
  };

  return (
    <header className="bg-primaryBlue text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <h1 className="text-xl lg:text-2xl font-bold whitespace-nowrap">Task Manager</h1>

        <div className="w-full order-3 lg:order-none mt-4 lg:mt-0 lg:w-auto">
          <Searchbar />
        </div>

        {!token ? (
          <div className="flex space-x-4 order-2 lg:order-none">
            <NavLink to="/login" className="hover:text-gray-300">
              Login
            </NavLink>
            <NavLink to="/signup" className="hover:text-gray-300">
              Signup
            </NavLink>
          </div>
        ) : (
          <>
            <button
              className="block lg:hidden order-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="text-2xl">&#9776;</span>
            </button>

            <nav
              className={`${
                isMenuOpen ? "block" : "hidden"
              } w-full lg:flex lg:w-auto lg:static bg-primaryBlue mt-4 lg:mt-0`}
            >
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
                <NavLink to="/" className={({ isActive }) =>
                  isActive
                    ? "text-warningYellow font-semibold hover:text-yellow-400"
                    : "hover:text-gray-300"
                }>
                  Dashboard
                </NavLink>
                <NavLink to="/user-profile" className={({ isActive }) =>
                  isActive
                    ? "text-warningYellow font-semibold hover:text-yellow-400"
                    : "hover:text-gray-300"
                }>
                  Profile
                </NavLink>
                <NavLink to="/tasks" className={({ isActive }) =>
                  isActive
                    ? "text-warningYellow font-semibold hover:text-yellow-400"
                    : "hover:text-gray-300"
                }>
                  Tasks
                </NavLink>
                <NavLink
                  to="/"
                  onClick={() => setIsLogoutModalOpen(true)}
                  className="hover:text-gray-300"
                >
                  Logout
                </NavLink>
              </div>
            </nav>
          </>
        )}
      </div>

      <ConfirmModal
        title="Logout"
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      >
        <p>Are you sure you want to logout?</p>
      </ConfirmModal>
    </header>
  );
}
