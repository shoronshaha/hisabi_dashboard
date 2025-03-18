/* eslint-disable react/prop-types */
import React from "react";
import DataTable from "../../../../components/table/DataTable";
import { FaEdit, FaTrash } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";

const UserTable = ({
  data,
  phone,
  address,
  action,
  th,
  tr,
  td,
  status,
  role,
  handleDelete,
  handleEdit,
  rowBorderColor,
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
          Header: "Image",
          disableSortBy: false,
          Cell: ({ row }) => (
            <img
              src={row.original?.image}
              alt={row.original?.name}
              className="w-10 h-10 rounded-full"
            />
          ),
        },
        {
          Header: "Name",
          disableSortBy: false,
          Cell: ({ row }) => <div className="flex">{row.original?.name}</div>,
        },
        {
          Header: "Email",
          disableSortBy: false,
          Cell: ({ row }) => <div className="flex">{row.original?.email}</div>,
        },
        !phone && {
          Header: "Phone",
          disableSortBy: false,
          Cell: ({ row }) => <div className="flex">{row.original?.phone}</div>,
        },
        !address && {
          Header: "Address",
          disableSortBy: false,
          Cell: ({ row }) => (
            <div className="flex">{row.original?.address}</div>
          ),
        },
        !role && {
          Header: "Role",
          disableSortBy: false,
          Cell: ({ row }) => <div className="flex">{row.original?.role}</div>,
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
              <button>
                <GrFormView />
              </button>
              <button
                onClick={() => handleEdit(role.id)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(row.original?.id)}>
                <FaTrash className="text-red-500 hover:text-red-700" />
              </button>
            </div>
          ),
        },
      ].filter(Boolean),
    [phone, address, action, status, role, handleDelete]
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      th={th}
      tr={tr}
      td={td}
      rowBorderColor={rowBorderColor}
    />
  );
};

export default UserTable;
