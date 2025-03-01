/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import * as HiIcons from "react-icons/hi";
import * as CiIcons from "react-icons/fa";
import * as FaUserGear from "react-icons/fa6";
import * as MdOutlinePostAdd from "react-icons/md";

export const MenuList = ({
  isExpanded,
  isActiveRoute,
  title,
  to,
  active,
  inactive,
}) => {
  // Ensure the icon names exist in Icons, otherwise fallback to null
  const IconActive =
    HiIcons[active] ||
    CiIcons[active] ||
    FaUserGear[active] ||
    MdOutlinePostAdd[active] ||
    null;
  const IconInActive =
    HiIcons[inactive] ||
    CiIcons[inactive] ||
    FaUserGear[inactive] ||
    MdOutlinePostAdd[inactive] ||
    null;

  return (
    <li className="relative">
      <div
        className={`absolute inset-y-0 left-0 flex items-center ${
          !isExpanded && isActiveRoute(to)
            ? "bg-gray-100 border-l-4 border-indigo-600 pl-4"
            : "pl-5"
        } pointer-events-none ${!isExpanded ? "w-16" : "w-12"}`}
      >
        {/* Only render the icon if it exists */}
        {isActiveRoute(to) && IconActive ? (
          <IconActive className="w-5 h-5 text-indigo-600" />
        ) : (
          IconInActive && <IconInActive className="w-5 h-5 text-gray-500" />
        )}
      </div>

      <Link
        to={to}
        className={`inline-flex items-center w-full text-[15px] font-normal focus:outline-none overflow-hidden text-nowrap ${
          !isExpanded
            ? "sm:h-8 sm:items-center flex"
            : `py-2 pl-12 pr-4 ${
                isActiveRoute(to)
                  ? "bg-gray-100 text-indigo-500 border-l-4 border-indigo-500"
                  : "text-primary-900 hover:bg-primary-50 border-l-4 border-white"
              }`
        }`}
      >
        {isExpanded && title}
      </Link>
    </li>
  );
};
