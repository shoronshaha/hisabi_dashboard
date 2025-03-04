import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const rolesData = [
  {
    id: 1,
    name: "Manager",
    description: "Manages operations",
    status: "Active",
  },
  { id: 2, name: "Seller", description: "Handles sales", status: "Active" },
  {
    id: 3,
    name: "Cashier",
    description: "Manages cash flow",
    status: "Inactive",
  },
];

export const RoleManagementTable = () => {
  const [roles, setRoles] = useState(rolesData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  // Delete role
  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  // Edit role
  const handleEdit = (id) => {
    alert(`Edit role with ID: ${id}`);
  };

  // Pagination Logic
  const totalPages = Math.ceil(roles.length / itemsPerPage);
  const currentRoles = roles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Role Management</h2>
        <button
          onClick={() => navigate("/dashboard/user/add-role")}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
        >
          Add New Role
        </button>
      </div>

      

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Role Name</th>
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRoles.map((role, index) => (
              <tr key={role.id} className="border-t">
                <td className="py-2 px-4">
                  {index + 1 + (currentPage - 1) * itemsPerPage}
                </td>
                <td className="py-2 px-4">{role.name}</td>
                <td className="py-2 px-4">{role.description}</td>
                <td className="py-2 px-4">{role.status}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(role.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(role.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
