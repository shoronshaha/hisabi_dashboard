import { useState, useEffect } from "react";
import Navber from "./includes/Navber";
import Sidebar from "./includes/Sidebar";
import { Outlet } from "react-router-dom";
import { TopHead } from "./includes/TopHead";

export const Master = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});

  const handleContentToggle = (section) => {
    setExpandedSections((prevState) => {
      // Create a new state where all sections are set to false
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      // Toggle the clicked section
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
    <>
      <div className="flex w-full h-full relative ">
        <div className="hidden lg:block">
          <Sidebar
            toggleSidebar={toggleSidebar}
            isExpanded={isExpanded}
            expandedSections={expandedSections}
            toggle={handleContentToggle}
          />
        </div>

        {/* Overlay when the sidebar is expanded on small screens */}
        {/* {isExpanded && window.innerWidth <= 1024 && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={isExpanded && window.innerWidth <= 1024 && toggleSidebar}></div>
        )} */}

        <main
          className={`transition-all duration-300 w-full ${
            isExpanded ? "lg:w-[calc(100%-256px)] lg:ml-64" : "w-full lg:ms-16"
          } bg-gray-100 `}
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
    </>
  );
};
