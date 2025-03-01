import svg from "../../../assets/svg";
import { Link, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";

import { CiUser } from "react-icons/ci";

import { IoIosLogOut } from "react-icons/io";

export const TopHead = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/dashboard`);
  };

  return (
    <>
      <div className=" left-0 right-0 bg-white border-b border-gray-200 lg:hidden  sticky top-0 h-13 z-[99]">
        <div className="flex p-3 justify-between items-center ">
          <div>
            <img
              onClick={handleClick}
              src={svg.logo}
              alt="Logo"
              className="h-7 md:h-10 cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="indicator border border-gray-100 rounded-full p-1">
              <span className="indicator-item bg-orange-400  text-[8px]  h-[1] rounded-full px-1 text-lime-50">
                99+
              </span>

              <IoNotificationsOutline size={20} />
            </div>
            <div className="dropdown dropdown-end">
              <div
                className="border border-gray-100  rounded-full p-1"
                tabIndex={0}
                role="button"
              >
                <CiUser size={20} />

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 mt-4 rounded-md z-[1] min-w-[180px] p-2 border border-gray-100 shadow-md shadow-black/5"
                >
                  <Link
                    to={`/dashboard/user/`}
                    className="border-b flex items-center gap-1 leading-3  pb-2 mb-1"
                  >
                    <div className="">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        className="w-8 h-8 rounded-md"
                      />
                    </div>
                    <div>
                      <p className="text-[.7rem] md:text-[1rem] text-gray-700">
                        Super Admin
                      </p>
                      <p className="text-[.6rem] md:text-sm text-gray-500">
                        admin@gmail.com
                      </p>
                    </div>
                  </Link>

                  <div className=" text-[.7rem] text-gray-500 fleMdSx items-center">
                    Settings
                  </div>
                  <div className=" text-[.7rem] text-gray-500 flex items-center">
                    <IoIosLogOut size={15} className="me-2" />
                    Logout
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
