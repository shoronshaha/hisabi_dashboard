import { useState } from "react";
import { Container } from "../../../components/layouts/Container";
import UserAnalytics from "./content/UserAnalytics";
import { CiSearch } from "react-icons/ci";
import UserTable from "./content/UserTable";
import { useNavigate } from "react-router-dom";
import { user } from "../../../utils/jsonData";

function UsersListPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [users, setUsers] = useState(() => user()); // Lazy initialization
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter(
    (user) => activeTab === "all" || user.status.toLowerCase() === activeTab
  );

  return (
    <Container>
      <div className="min-h-[90vh] space-y-6 p-4">
        <UserAnalytics />

        <div className="flex items-center justify-center space-x-2">
          {["all", "active", "inactive", "copy"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded-full transition ${
                activeTab === tab
                  ? "bg-purple-600 text-white font-semibold"
                  : "bg-white text-black hover:bg-purple-400 hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-white border border-gray-100 shadow-md p-4 md:p-6 rounded-md">
          <div className=" flex font-medium mb-4 justify-between">
            User List :: {filteredUsers?.length}
            <div className="flex items-center ">
              <div className="relative mr-2 ">
                <input
                  type="text"
                  className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-indigo-900"
                  placeholder="Search..."
                />
                <CiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
              </div>
              <button
                onClick={() => navigate("/dashboard/user/add-new")}
                className="bg-indigo-500 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-600"
              >
                Add New
              </button>
            </div>
          </div>

          {/* Tab and Search Section */}
          <div className="flex justify-between gap-2 flex-wrap mb-3"></div>

          {/* User Table */}
          <UserTable data={filteredUsers} handleDelete={handleDelete} />
        </div>
      </div>
    </Container>
  );
}

export default UsersListPage;
