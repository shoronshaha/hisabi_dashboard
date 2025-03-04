import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTrash} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../../../../components/table/Pagination";

export const UsersListTable = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState(generateUsers());
  const navigate = useNavigate();
  const itemsPerPage = 10;

  function generateUsers() {
    const roles = ["Admin", "User", "Editor", "Moderator"];
    const statuses = ["Active", "Inactive", "Pending"];

    return Array.from({ length: 495 }, (_, i) => {
      const status = statuses[i % statuses.length];
      return {
        id: i + 1,
        image: `https://i.pravatar.cc/50?img=${i + 1}`,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        phone: `0171${i.toString().padStart(6, "0")}`,
        address: `City ${i + 1}, Bangladesh`,
        status,
        role: roles[i % roles.length],
      };
    });
  }

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter(
    (user) => activeTab === "all" || user.status.toLowerCase() === activeTab
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <div className="bg-white border border-gray-100 shadow-md p-4 md:p-6 rounded-md">
      <div className="font-medium mb-4">User List</div>

      <div className="flex justify-between gap-2 flex-wrap mb-3">
        <div className="flex items-center">
          {["all", "active", "inactive", "pending"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              className={`py-2 px-4 ${
                activeTab === tab
                  ? "text-gray-600 font-semibold bg-gray-200"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center">
          <div className="relative mr-2">
            <input
              type="text"
              className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-indigo-900"
              placeholder="Search..."
            />
            <CiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
          </div>
          <button
            onClick={() => navigate("/dashboard/user/add-new")}
            className="bg-indigo-500 text-white py-2 px-2 rounded-md text-sm font-medium hover:bg-indigo-600 w-[80px]"
          >
            Add New
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px]">
          <thead>
            <tr className="bg-gray-50">
              {[
                "Image",
                "Name",
                "Email",
                "Phone",
                "Address",
                "Status",
                "Role",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="text-[12px] uppercase font-medium text-gray-400 py-2 px-4 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-50 ">
                  <td className="py-2 px-4">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.phone}</td>
                  <td className="py-2 px-4">{user.address}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`p-1 rounded text-[12px] ${
                        user.status === "Active"
                          ? "bg-emerald-500/10 text-emerald-500"
                          : user.status === "Inactive"
                          ? "bg-red-500/10 text-red-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4">
                    <button onClick={() => handleDelete(user.id)}>
                      <FaTrash className="text-red-500 hover:text-red-700" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex mt-4 gap-2 justify-end items-center">
        {Pagination({ currentPage, totalPages, setCurrentPage })}
      </div>
    </div>
  );
};
