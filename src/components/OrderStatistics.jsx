const stats = [
  { label: "Active", count: 10, amount: "$80", color: "indigo" },
  { label: "Completed", count: 50, amount: "+$469", color: "emerald" },
  { label: "Canceled", count: 4, amount: "-$130", color: "rose" },
];

const earnings = [
  {
    service: "Create landing page",
    amount: "+$235",
    status: "Pending",
    color: "emerald",
  },
  {
    service: "Create landing page",
    amount: "-$235",
    status: "Withdrawn",
    color: "rose",
  },
];

const OrderStatistics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      <div className="bg-white border border-gray-100 shadow-md p-6 rounded-md lg:col-span-2">
        <div className="flex justify-between mb-4 items-start font-medium">
          Order Statistics
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-md border border-dashed p-4">
              <div className="flex items-center mb-0.5">
                <div className="text-xl font-semibold">{stat.count}</div>
                <span
                  className={`p-1 rounded text-[12px] font-semibold bg-${stat.color}-500/10 text-${stat.color}-500 ml-1`}
                >
                  {stat.amount}
                </span>
              </div>
              <span className="text-gray-400 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white border border-gray-100 shadow-md p-6 rounded-md">
        <div className="flex justify-between mb-4 items-start font-medium">
          Earnings
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[460px]">
            <thead>
              <tr>
                <th className="text-[12px] uppercase text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Service
                </th>
                <th className="text-[12px] uppercase text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Earning
                </th>
                <th className="text-[12px] uppercase text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {earnings.map((item, index) => (
                <tr key={index} className="border-b border-gray-50">
                  <td className="py-2 px-4 flex items-center">
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      className="w-8 h-8 rounded object-cover"
                    />
                    <a
                      href="#"
                      className="text-gray-600 text-sm font-medium hover:text-indigo-500 ml-2 truncate"
                    >
                      {item.service}
                    </a>
                  </td>
                  <td className="py-2 px-4 text-[13px] font-medium text-gray-600">
                    {item.amount}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`inline-block p-1 rounded bg-${item.color}-500/10 text-${item.color}-500 text-[12px] font-medium`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderStatistics;
