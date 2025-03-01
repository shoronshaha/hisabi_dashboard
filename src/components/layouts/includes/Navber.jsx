/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi2";
import { BsWallet2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaBell, FaBars, FaUserCircle } from "react-icons/fa";
import { Drawer } from "./Drawer";
import { MdSettings } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

const Navbar = ({ toggleSidebar, isExpanded, expandedSections, toggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* <div className="hidden lg:block"> */}
      <nav className="bg-white p-3 sticky top-0 hidden lg:block z-[10]">
        <div className="flex w-full items-center justify-between">
          {/* Left: Search Bar and Sidebar Toggle */}
          <div className="flex items-center space-x-0 md:space-x-4 pl-0 md:pl-3">
            {/* Search Bar (visible on medium and large screens) */}
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 text-gray-700 px-3 font-light py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-900 hidden md:block"
            />

            {/* Sidebar toggle button (visible only on small screens) */}
            <button
              className="items-center sm:flex justify-center p-0.5 rounded focus:outline-none md:hidden"
              onClick={toggleSidebar}
            >
              <FaBars className="w-5 h-5 text-indigo-800" />
            </button>
          </div>

          {/* Right: Profile, Menu, Notification, Balance */}
          <div className="relative flex items-center space-x-6">
            {/* Balance (Hidden on small screens, visible on large screens) */}
            <div className="text-gray-700 flex items-center hidden lg:flex">
              <span className="mr-1">💸</span>
              <span>₹12,000</span>
            </div>

            {/* Notification Icon (Always visible) */}
            <button className="text-gray-700">
              <FaBell size={20} />
            </button>

            {/* Profile Icon and Dropdown Menu */}
            <div className="relative">
              <button className="text-gray-700" onClick={toggleMenu}>
                <FaUserCircle size={24} />
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="Profile"
                      className="rounded-full w-8 h-8 mr-2"
                    />
                    <span>Super Admin</span>
                  </li>
                  <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <MdSettings size={15} className="me-2" /> Settings
                  </li>
                  <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <IoIosLogOut size={15} className="me-2" /> Logout
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* </div> */}

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-[10]">
        <ul className="flex justify-around items-center h-16">
          {/* Home */}
          <NavLink className="flex flex-col items-center" to={`/dashboard`}>
            <IoHomeOutline />
            <span className="text-xs text-gray-600">Dashboard</span>
          </NavLink>
          {/* Booking */}
          <NavLink
            className="flex flex-col items-center"
            to={`/dashboard/live-management`}
          >
            <HiOutlineTicket />
            <span className="text-xs text-gray-600">User</span>
          </NavLink>

          {/* Wallet */}
          <NavLink className="flex flex-col items-center">
            <BsWallet2 />
            <span className="text-xs text-gray-600">Sell</span>
          </NavLink>

          {/* Profile */}
          <div className="flex flex-col items-center relative z-[500]">
            <Drawer
              toggleSidebar={toggleSidebar}
              isExpanded={isExpanded}
              expandedSections={expandedSections}
              toggle2={toggle}
            />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
