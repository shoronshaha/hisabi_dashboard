/* eslint-disable react/prop-types */
export const SidebarLabel = ({ isExpanded, title }) => {
  return (
    <>
      <li>
        <div
          className={`border-indigo-50 border-l border-b uppercase inline-flex items-center w-full text-gray-300  font-medium focus:outline-none overflow-hidden 
          ${
            !isExpanded
              ? "sm:h-8 sm:items-center flex ps-1 text-[9px]"
              : `py-2  px-4 text-[13px]
          `
          }`}
        >
          {title}
        </div>
      </li>
    </>
  );
};
