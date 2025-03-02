import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navber from "./includes/Navber";
import Sidebar from "./includes/Sidebar";
import { Outlet } from "react-router-dom";
import { TopHead } from "./includes/TopHead";

export const Master = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const location = useLocation(); // Get current route

  // Define routes where the sidebar should be hidden
  const hideSidebarRoutes = ["/dashboard/sales/pos"];

  // Check if the current path matches or starts with any of the hidden routes
  const shouldHideSidebar = hideSidebarRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  const handleContentToggle = (section) => {
    setExpandedSections((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      newState[section] = !prevState[section];
      return newState;
    });
  };

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth > 1024);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex w-full h-full relative">
      {/* Show Sidebar only if it's not in hideSidebarRoutes */}
      {!shouldHideSidebar && (
        <div className="hidden lg:block">
          <Sidebar
            toggleSidebar={toggleSidebar}
            isExpanded={isExpanded}
            expandedSections={expandedSections}
            toggle={handleContentToggle}
          />
        </div>
      )}

      <main
        className={`transition-all duration-300 w-full ${
          !shouldHideSidebar && isExpanded
            ? "lg:w-[calc(100%-256px)] lg:ml-64"
            : "w-full"
        } bg-gray-100`}
      >
        <Navber
          toggleSidebar={toggleSidebar}
          isExpanded={isExpanded}
          expandedSections={expandedSections}
          toggle={handleContentToggle}
        />
        <div className="mb-[64px] lg:mb-0">
          <TopHead />
          <Outlet />
        </div>
      </main>
    </div>
  );
};
