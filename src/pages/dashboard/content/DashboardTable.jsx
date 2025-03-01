import React from "react";
import DataTable from "../../../components/table/DataTable";

const DashboardTable = () => {
  const data = [
    { name: "John Doe", salary: 5000 },
    { name: "Jane Smith", salary: 7000 },
    { name: "Alice Johnson", salary: 8000 },
    { name: "Bob Brown", salary: 9000 },
    { name: "John Doe", salary: 5000 },
    { name: "Jane Smith", salary: 7000 },
    { name: "Alice Johnson", salary: 8000 },
    { name: "Bob Brown", salary: 9000 },
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: "Sl No",
        disableSortBy: false,
        Cell: ({ row }) => {
          return (
            <div className="flex justify-center text-black font-semibold">
              {row.index + 1} {/* Sl No */}
            </div>
          );
        },
      },
      {
        Header: "Name",
        disableSortBy: false,
        Cell: ({ row }) => {
          const name = row.original.name;
          return <div className="flex justify-center text-black">{name}</div>;
        },
      },
      {
        Header: "Salary",
        disableSortBy: false,
        Cell: ({ row }) => {
          const salary = row.original.salary;
          return (
            <div className="flex justify-center text-black">
              ${salary.toLocaleString()} {/* Adds commas to the salary */}
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="overflow-x-auto bg-white">
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <DataTable columns={columns} data={data} noPagination />
      </div>
    </div>
  );
};

export default DashboardTable;
