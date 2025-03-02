const TableHeader = ({ headerGroups, th }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => {
        const { key, ...headerGroupProps } = headerGroup.getHeaderGroupProps(); // Extract key separately
        return (
          <tr key={key} {...headerGroupProps} className="bg-gray-100">
            {headerGroup.headers.map((column) => {
              const { key: colKey, ...columnProps } = column.getHeaderProps(); // Extract key separately
              return (
                <th
                  key={colKey}
                  {...columnProps}
                  className={` uppercase font-medium  py-2 px-4 text-left ${
                    th ? th : "text-gray-600 text-sm  font-semibold border"
                  }`}
                >
                  {column.render("Header")}
                </th>
              );
            })}
          </tr>
        );
      })}
    </thead>
  );
};

export default TableHeader;
