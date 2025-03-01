import React from "react";

const TableRow = ({ row, tr, td }) => {
  const { key, ...rowProps } = row.getRowProps(); // Extract key separately

  return (
    <tr
      key={key}
      {...rowProps}
      className={`border-b ${tr ? tr : "border-gray-50"} `}
    >
      {row.cells.map((cell) => {
        const { key: cellKey, ...cellProps } = cell.getCellProps(); // Extract key separately
        return (
          <td
            key={cellKey}
            {...cellProps}
            className={`py-2 px-4 text-gray-600 text-sm border ${td}`}
          >
            {cell.render("Cell")}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
