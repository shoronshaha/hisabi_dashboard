/* eslint-disable react/prop-types */
export const Container = ({ children , className}) => {
  return <div className={` ${className } p-3 md:p-3  mb-16 lg:mb-0 `}>{children}</div>;
};
