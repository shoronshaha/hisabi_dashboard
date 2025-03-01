export const ManageService = () => {
  // Service data array
  const services = [
    {
      id: 1,
      name: "Create landing page",
      price: "$235",
      clicks: "1K",
      image: "https://placehold.co/32x32",
    },
    {
      id: 2,
      name: "SEO Optimization",
      price: "$150",
      clicks: "850",
      image: "https://placehold.co/32x32",
    },
    {
      id: 3,
      name: "Social Media Management",
      price: "$400",
      clicks: "1.5K",
      image: "https://placehold.co/32x32",
    },
    {
      id: 4,
      name: "Content Writing",
      price: "$120",
      clicks: "500",
      image: "https://placehold.co/32x32",
    }
  ];

  return (
    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-3 md:p-6 rounded-md">
      <div className="flex justify-between mb-4 items-start">
        <div className="font-medium">Manage Services</div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px]">
          <thead>
            <tr>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                Service
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Price
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Clicks
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-8 h-8 rounded object-cover block"
                    />
                    <a
                      href="#"
                      className="text-gray-600 text-sm font-medium hover:text-indigo-900 ml-2 truncate"
                    >
                      {service.name}
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    {service.price}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    {service.clicks}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <button className="text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50">
                    <i className="ri-more-2-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};