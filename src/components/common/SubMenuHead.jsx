/* eslint-disable react/prop-types */
import { HiOutlineChevronDown } from "react-icons/hi";
import * as MdOutlinePostAdd from "react-icons/md";
import * as HiIcons from "react-icons/hi"; // Import Heroicons
import * as CiIcons from "react-icons/fa"; // Import Circum Icons
import * as FaUserGear from "react-icons/fa6";
import * as IoMdContacts from "react-icons/io";
export const SubMenuHead = ({
  exp,
  title,
  to,
  onClick,
  expSec,
  active,
  inactive,
  children,
}) => {
  // Ensure the icon names exist in Icons, otherwise fallback to null
  // Check for the active/inactive icon in both icon libraries
  const IconActive =
    HiIcons[active] ||
    CiIcons[active] ||
    FaUserGear[active] ||
    MdOutlinePostAdd[active] ||
    IoMdContacts[active] ||
    null;
  const IconInActive =
    HiIcons[inactive] ||
    CiIcons[inactive] ||
    FaUserGear[inactive] ||
    MdOutlinePostAdd[inactive] ||
    IoMdContacts[inactive] ||
    null;

  return (
    <li className="relative cursor-pointer">
      <div
        className={`relative flex justify-between text-primary-900 hover:text-indigo-500 focus-within:text-indigo-500  `}
        onClick={onClick}
      >
        <div className={`flex items-center w-full ${!exp && "md:w-16"}`}>
          <div
            className={`absolute inset-y-0 left-0 flex items-center   ${
              !exp && to
                ? "bg-gray-100 border-l-4 border-indigo-600 pl-4"
                : "pl-5"
            } ${!exp && "md:w-16 sm:h-8 sm:items-center flex "}`}
          >
            {/* <img
              src={`${to ? active : inactive}`}
              alt="Booking icon"
              className={`w-5 h-5 ${to ? "text-indigo-500 " : ""}`}
            /> */}

            {to && IconActive ? (
              <IconActive className="w-5 h-5 text-indigo-600" />
            ) : (
              IconInActive && <IconInActive className="w-5 h-5 text-gray-500" />
            )}
          </div>
          <div
            className={`inline-block text-nowrap w-full py-2 pl-12 pr-4 text-[15px] transition-all duration-300 ease-in-out font-normal border-l-4 hover:bg-primary-50 focus:outline-none
              ${
                !exp
                  ? "border-white"
                  : `${
                      to
                        ? `bg-gray-100 text-indigo-500  ${
                            to ? " border-indigo-500" : ""
                          }`
                        : "border-white"
                    }`
              }
             `}
          >
            {exp ? title : ""}
          </div>
        </div>

        {/* Chevron Button for Expanding/Collapsing */}
        {exp && (
          <button
            className="absolute right-0 flex items-center p-2 mt-1"
            tabIndex="-1"
          >
            <HiOutlineChevronDown
              className={`font-normal text-gray-400 transition-transform duration-300 ease-in-out ${
                to && "text-indigo-600 font-normal"
              }  ${expSec ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
      <div
        className={`  ${
          exp ? "pt-1 pl-10" : "mt-6 pl-7"
        }   transition-all duration-300 ease-in-out ${
          expSec ? "max-h-screen opacity-100 " : "max-h-0 opacity-0 "
        } overflow-hidden`}
      >
        <ul
          className={`flex flex-col text-indigo-900 border-l border-indigo-100  text-nowrap`}
        >
          {children}
        </ul>
      </div>
    </li>
  );
};
