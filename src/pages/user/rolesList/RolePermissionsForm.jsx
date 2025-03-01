import { useState } from "react";

const modules = [
  { id: 1, name: "Users" },
  { id: 2, name: "Roles" },
  { id: 3, name: "Tax" },
  { id: 4, name: "Units" },
  { id: 5, name: "Payment Types" },
];

const permissions = ["Add", "Edit", "Delete", "View"];

export default function RolePermissionsForm() {
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState({});

  const handlePermissionChange = (moduleId, permission) => {
    setSelectedPermissions((prev) => {
      const updatedModule = prev[moduleId] || [];
      const updatedPermissions = updatedModule.includes(permission)
        ? updatedModule.filter((p) => p !== permission)
        : [...updatedModule, permission];
      return { ...prev, [moduleId]: updatedPermissions };
    });
  };

  const handleSelectAll = (moduleId) => {
    setSelectedPermissions((prev) => {
      const allSelected = prev[moduleId]?.length === permissions.length;
      return {
        ...prev,
        [moduleId]: allSelected ? [] : [...permissions],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Role Name:", roleName);
    console.log("Description:", description);
    console.log("Selected Permissions:", selectedPermissions);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Create New Role</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Role Name*</label>
          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            placeholder="Enter role name"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        <div className="mb-8">
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe this role"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        <h3 className="text-xl font-semibold mb-4">Permissions</h3>

        {modules.map((module) => (
          <div key={module.id} className="mb-6 border-b pb-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium">{module.name}</h4>
              <button
                type="button"
                onClick={() => handleSelectAll(module.id)}
                className="text-blue-500 hover:underline"
              >
                Select All
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {permissions.map((permission) => (
                <label key={permission} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="bg-white appearance-none checked:bg-black checked:border-black border border-gray-300 rounded-full w-4 h-4"
                    checked={
                      selectedPermissions[module.id]?.includes(permission) ||
                      false
                    }
                    onChange={() =>
                      handlePermissionChange(module.id, permission)
                    }
                  />
                  {permission}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Save Role
        </button>
      </form>
    </div>
  );
}
