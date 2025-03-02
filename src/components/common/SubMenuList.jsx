/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { HiOutlineStop } from "react-icons/hi";

export const SubMenuList = ({ to, title, isActiveRoute, isExpanded }) => {
  return (
    <li>
      <Link
        to={to}
        className={`inline-block w-full text-nowrap ${
          isExpanded ? "px-4" : "px-2 py-3 mt-1"
        } py-2 text-[14px] font-light transition-colors duration-300 ease-in-out hover:bg-primary-50 focus:outline-none ${
          isActiveRoute(to) && "bg-gray-100 text-indigo-500 "
        }`}
      >
        {isExpanded ? (
          <div className="flex items-center">
            {to === "/dashboard/sales/pos" ? (
              <></>
            ) : (
              <HiOutlineStop className="sm:me-2 me-3 text-[6px]" />
            )}{" "}
            {title}
          </div>
        ) : (
          <>
            {to === "/dashboard/sales/pos" ? (
              <></>
            ) : (
              <HiOutlineStop className=" text-[6px]" />
            )}
          </>
        )}
      </Link>
    </li>
  );
};
