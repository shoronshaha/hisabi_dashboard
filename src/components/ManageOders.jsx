import { useState } from "react";

export const ManageOrders = () => {
  const [activeTab, setActiveTab] = useState("active");

  const orders = [
    {
      service: "Create landing page",
      estimate: "3 days",
      budget: "$56",
      status: "In progress",
      img: "https://placehold.co/32x32",
      statusColor: "bg-emerald-500/10 text-emerald-500",
    },
    {
      service: "Develop mobile app",
      estimate: "7 days",
      budget: "$150",
      status: "Completed",
      img: "https://placehold.co/32x32",
      statusColor: "bg-blue-500/10 text-blue-500",
    },
    {
      service: "SEO Optimization",
      estimate: "5 days",
      budget: "$75",
      status: "Pending",
      img: "https://placehold.co/32x32",
      statusColor: "bg-yellow-500/10 text-yellow-500",
    },
    {
      service: "SEO Optimization",
      estimate: "5 days",
      budget: "$75",
      status: "canceled",
      img: "https://placehold.co/32x32",
      statusColor: "bg-yellow-500/10 text-yellow-500",
    },
  ];

  // Function to filter orders based on the active tab
  const filteredOrders = orders.filter((order) => {
    if (activeTab === "active")
      return order.status === "In progress" || order.status === "Pending";
    if (activeTab === "completed") return order.status === "Completed";
    if (activeTab === "canceled") return order.status === "Canceled";

    return true;
  });

  return (
    <div className="bg-white border border-gray-100 shadow-md p-4 md:p-6 rounded-md">
      <div className="font-medium mb-4">Manage Orders</div>

      {/* Tab Buttons */}
      <div className="flex items-center mb-4 order-tab">
        {["active", "completed", "canceled"].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`bg-gray-50 text-sm font-medium py-2 px-4 ${
              activeTab === tab
                ? "text-gray-600 font-semibold bg-gray-200"
                : "text-gray-400 hover:text-gray-600"
            } ${tab === "active" ? "rounded-tl-md rounded-bl-md" : ""} ${
              tab === "canceled" ? "rounded-tr-md rounded-br-md" : ""
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px]">
          <thead>
            <tr className="bg-gray-50">
              {["Service", "Estimate", "Budget", "Status"].map((header) => (
                <th
                  key={header}
                  className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <tr key={index} className="border-b border-gray-50">
                  <td className="py-2 px-4 flex items-center">
                    <img
                      src={order.img}
                      alt=""
                      className="w-8 h-8 rounded object-cover"
                    />
                    <a
                      href="#"
                      className="text-gray-600 text-sm font-medium hover:text-indigo-900 ml-2 truncate"
                    >
                      {order.service}
                    </a>
                  </td>
                  <td className="py-2 px-4 text-[13px] font-medium text-gray-400">
                    {order.estimate}
                  </td>
                  <td className="py-2 px-4 text-[13px] font-medium text-gray-400">
                    {order.budget}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`inline-block p-1 rounded text-[12px] font-medium leading-none ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
