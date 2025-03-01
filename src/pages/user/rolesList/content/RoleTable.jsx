/* eslint-disable react/prop-types */
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "../../../../components/table/DataTable";

const RoleTable = ({
  data,
  action,
  th,
  tr,
  td,
  status,
  handleDelete,
  handleEdit,
}) => {
  const columns = React.useMemo(
    () =>
      [
        {
          Header: "Sl No",
          disableSortBy: false,
          Cell: ({ row }) => (
            <div className="flex font-semibold">{row.index + 1}</div>
          ),
        },
        {
          Header: "Role Name",
          disableSortBy: false,
          Cell: ({ row }) => (
            <div className="flex ">{row.original?.roleName}</div>
          ),
        },
        {
          Header: "Description",
          disableSortBy: false,
          Cell: ({ row }) => (
            <div className="relative group">
              {/* Truncated Text */}
              <div className="line-clamp-1">
                {" "}
                {row.original?.description?.length > 20
                  ? `${row.original.description.slice(0, 20)}...`
                  : row.original.description}
              </div>

              {/* Tooltip (Full Description on Hover) */}
              <div className="absolute left-0 top-full mt-1 w-64 break-words rounded-lg bg-white p-2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 z-10 shadow-lg">
                {row.original?.description}
              </div>
            </div>
          ),
        },

        !status && {
          Header: "Status",
          disableSortBy: false,
          Cell: ({ row }) => (
            <span
              className={`p-1 rounded text-[12px] ${
                row.original?.status === "Active"
                  ? "bg-emerald-500/10 text-emerald-500"
                  : row.original?.status === "Inactive"
                  ? "bg-red-500/10 text-red-500"
                  : "bg-yellow-500/10 text-yellow-500"
              }`}
            >
              {row.original?.status}
            </span>
          ),
        },
        !action && {
          Header: "Action",
          disableSortBy: false,
          Cell: ({ row }) => (
            <div className="flex gap-2">
              <button onClick={() => handleEdit(row.original?.id)}>
                {" "}
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(row.original?.id)}>
                <FaTrash className="text-red-500 hover:text-red-700" />
              </button>
            </div>
          ),
        },
      ].filter(Boolean),
    [action, status, handleDelete, handleEdit]
  );

  return <DataTable columns={columns} data={data} th={th} tr={tr} td={td} />;
};

export default RoleTable;
