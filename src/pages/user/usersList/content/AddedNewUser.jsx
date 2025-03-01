import { useState } from "react";

const AddedNewUserForm = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Create User
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/** Input Fields */}
        {[
          "First Name",
          "Last Name",
          "Mobile",
          "Email",
          "Password",
          "Confirm Password",
          "Warehouses",
        ].map((label, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700">
              {label}
            </label>
            <input
              type={label.includes("Password") ? "password" : "text"}
              placeholder={label}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-300"
            />
          </div>
        ))}

        {/** Role Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role*
          </label>
          <select className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700">
            <option disabled selected>
              - Select -
            </option>
            <option>Admin</option>
            <option>User</option>
          </select>
        </div>
      </div>

      {/** Profile Picture Upload */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Profile Picture
          </label>
          <input
            type="file"
            className="mt-2 w-full max-w-xs border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
            onChange={handleFileChange}
          />
          <p className="text-sm text-gray-500 mt-1">
            Max: 500px × 500px, Size: 500Kb
          </p>
        </div>

        {/** Display Profile Picture */}
        {profilePic && (
          <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
            <img
              src={profilePic}
              alt="Profile Preview"
              className="w-28 h-28 rounded-full shadow-lg border border-gray-300 object-cover"
            />
          </div>
        )}
      </div>

      {/** Buttons */}
      <div className="mt-6 flex justify-end gap-3">
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all">
          Save
        </button>
        <button className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 transition-all">
          Close
        </button>
      </div>
    </div>
  );
};

export default AddedNewUserForm;
