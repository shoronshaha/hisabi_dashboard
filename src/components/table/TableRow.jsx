import React from "react";

const TableRow = ({ row, tr, td, borderColor }) => {
  const { key, ...rowProps } = row.getRowProps(); // Extract key separately

  // Define an array of 9 different colors for the bottom border (fallback to a default if no color is passed)
  const borderColors = [
    "border-red-500",
    "border-blue-500",
    "border-green-500",
    "border-yellow-500",
    "border-purple-500",
    "border-pink-500",
    "border-indigo-500",
    "border-teal-500",
    "border-cyan-500",
  ];

  // If a borderColor prop is passed, use it; otherwise, fallback to a random color from the array
  const rowBorderColor =
    borderColor || borderColors[row.index % borderColors.length];

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
            className={`py-2 px-4 text-gray-600 text-sm border-b ${rowBorderColor} ${td}`}
          >
            {cell.render("Cell")}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
