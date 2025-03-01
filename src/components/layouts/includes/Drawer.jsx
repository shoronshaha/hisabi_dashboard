/* eslint-disable react/prop-types */
import { CiMenuBurger } from "react-icons/ci";
import { SidebarLabel } from "./SidebarLabel";
import { MenuList } from "../../common/MenuList";
import sidebarData from "../../../utils/sidebarData";
import { SubMenuHead } from "../../common/SubMenuHead";
import { SubMenuList } from "../../common/SubMenuList";

export const Drawer = ({
  toggleSidebar,
  isExpanded,
  expandedSections,
  toggle2,
}) => {
  const userType = "ADMIN";

  const filteredSidebarData = sidebarData.filter((item) => {
    if (item?.userType) {
      return item?.userType.includes(userType);
    }
    return true;
  });

  const isActiveRoute = (path) => location.pathname === path;
  const isAnyActiveRoute = (paths) =>
    paths.some((path) => location.pathname.startsWith(path));

  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content leading-4" onClick={toggleSidebar}>
          <label htmlFor="my-drawer">
            <center>
              <CiMenuBurger />
              <span className="text-xs text-gray-600">Menu</span>
            </center>
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={toggleSidebar}
            aria-disabled
          ></label>

          <div className="bg-white min-h-full">
            <h5 className="border-b p-3 text-[1.2rem] px-4 mb-2 text-[var(--primary)] h-13">
              Menu List
            </h5>
            <div className="overflow-y-auto no-scrollbar  w-[60vw] md:w-[35vw] z-50 pb-3 relative">
              <ul className="flex flex-col space-y-1  ">
                {filteredSidebarData.map((item, index) => (
                  <div key={index}>
                    {item?.label ? (
                      <SidebarLabel
                        title={item?.label}
                        isExpanded={isExpanded}
                      />
                    ) : item?.subMenu ? (
                      <SubMenuHead
                        title={item?.title}
                        exp={isExpanded}
                        to={isAnyActiveRoute(
                          item?.subMenu.map((sub) => sub.path)
                        )}
                        active={item?.icon.active}
                        inactive={item?.icon.inactive}
                        onClick={() => toggle2(item?.title.toLowerCase())}
                        expSec={expandedSections[item?.title.toLowerCase()]}
                      >
                        {item?.subMenu
                          .filter((subItem) =>
                            subItem.userType.includes(userType)
                          ) // Filter submenu items based on user type
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
                        to={item?.path}
                        title={item?.title}
                        active={item?.icon.active}
                        inactive={item?.icon.inactive}
                      />
                    )}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
