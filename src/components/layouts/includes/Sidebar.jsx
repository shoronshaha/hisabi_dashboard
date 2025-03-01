/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import svg from "../../../assets/svg";
import images from "../../../assets/image";
import { MenuList } from "../../common/MenuList";
import { SubMenuList } from "../../common/SubMenuList";
import { SubMenuHead } from "../../common/SubMenuHead";
import { SidebarLabel } from "./SidebarLabel";
import sidebarData from "../../../utils/sidebarData";

const Sidebar = ({ toggleSidebar, isExpanded, expandedSections, toggle }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  const isActiveRoute = (path) => location.pathname === path;
  const isAnyActiveRoute = (paths) =>
    paths.some((path) => location.pathname.startsWith(path));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call handler right away to set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define user type for filtering sidebar data
  const userType = "ADMIN"; // Dynamically set this based on the logged-in user

  // Filter sidebar data based on user type
  const filteredSidebarData = sidebarData.filter((item) => {
    // Check if item has userType property
    if (item.userType) {
      return item.userType.includes(userType);
    }
    return true; // Allow labels or sections without a `userType` field
  });

  return (
    <div
      className={`fixed left-0 top-0 h-full border-r border-indigo-50 bg-white z-50 ${
        isExpanded && isMobile ? "transition-transform" : "transition-all"
      } duration-300 ${isExpanded ? "w-1/2 md:w-64" : "w-0 md:w-16"}`}
      style={{ height: "100vh" }}
    >
      <div className="border-b border-indigo-50">
        <div className="flex items-center justify-between p-3">
          {isExpanded ? (
            <img
              onClick={handleClick}
              src={svg.logo}
              alt="Logo"
              className="h-7 md:h-10 cursor-pointer"
            />
          ) : (
            <img
              onClick={handleClick}
              src={images.logosm}
              alt="Small Logo"
              className="h-10 cursor-pointer"
            />
          )}

          <button
            onClick={toggleSidebar}
            className={`${
              isExpanded ? "block" : "absolute -right-5"
            } flex items-center justify-center p-0.5 rounded focus:outline-none ${
              !isExpanded && isMobile ? "" : "bg-indigo-500"
            }`}
            aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isExpanded ? (
              <HiOutlineChevronLeft className="w-3 h-3 text-primary-300" />
            ) : (
              <HiOutlineChevronRight className="w-3 h-3 text-primary-300 hidden md:block" />
            )}
          </button>
        </div>
      </div>

      <div className="pt-3 overflow-y-auto no-scrollbar">
        <ul className="flex flex-col space-y-1">
          {filteredSidebarData.map((item, index) => (
            <div key={index}>
              {item.label ? (
                <SidebarLabel title={item.label} isExpanded={isExpanded} />
              ) : item.subMenu ? (
                <SubMenuHead
                  title={item.title}
                  exp={isExpanded}
                  to={isAnyActiveRoute(item.subMenu.map((sub) => sub.path))}
                  active={item.icon.active}
                  inactive={item.icon.inactive}
                  onClick={() => toggle(item.title.toLowerCase())}
                  expSec={expandedSections[item.title.toLowerCase()]}
                >
                  {item.subMenu
                    .filter((subItem) => subItem.userType.includes(userType)) // Filter submenu items based on user type
                    .map((subItem, subIndex) => (
                      <SubMenuList
                        key={subIndex}
                        title={subItem.title}
                        to={subItem.path}
                        isExpanded={isExpanded}
                        isActiveRoute={isActiveRoute}
                      />
                    ))}
                </SubMenuHead>
              ) : (
                <MenuList
                  isExpanded={isExpanded}
                  isActiveRoute={isActiveRoute}
                  to={item.path}
                  title={item.title}
                  active={item.icon.active}
                  inactive={item.icon.inactive}
                />
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
