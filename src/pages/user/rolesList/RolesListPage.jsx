import { Container } from "../../../components/layouts/Container";
import RoleTable from "./content/RoleTable";
import { rolesData } from "../../../utils/jsonData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function RolesListPage() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();
  return (
    <Container>
      <div className="min-h-[90vh] space-y-6 p-4">
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
          <div className=" flex justify-between font-medium mb-4">
            User List :: {rolesData?.length}
            <div className="flex justify-between gap-2 flex-wrap mb-3">
              <div className="flex items-center">
                <button
                  onClick={() => navigate("/dashboard/user/add-role")}
                  className=" bg-purple-600 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-purple-300"
                >
                  Add New
                </button>
              </div>
            </div>
          </div>

          {/* Tab and Search Section */}

          <RoleTable data={rolesData} />
        </div>
      </div>
    </Container>
  );
}

export default RolesListPage;
