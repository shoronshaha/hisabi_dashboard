const orderData = [
  {
    id: 1,
    count: "10",
    label: "Active orders",
    progress: 60,
  },
  {
    id: 2,
    count: "324",
    label: "Visitors",
    percentage: "+30%",
    avatars: [
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
      "https://placehold.co/32x32",
    ],
  },
  {
    id: 3,
    count: "2,345",
    label: "Active orders",
    link: "#",
  },
];

const OrderCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-3 md:mb-6">
      {orderData.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5"
        >
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-2xl font-semibold mb-1">{order.count}</div>
              <div className="text-sm font-medium text-gray-400">
                {order.label}
              </div>
            </div>
            <div className="dropdown">
              <button
                type="button"
                className="dropdown-toggle text-gray-400 hover:text-gray-600"
              >
                <i className="ri-more-fill"></i>
              </button>
            </div>
          </div>
          {order.progress && (
            <div className="flex items-center">
              <div className="w-full bg-gray-100 rounded-full h-4">
                <div
                  className="h-full bg-blue-500 rounded-full p-1"
                  style={{ width: `${order.progress}%` }}
                >
                  <div className="w-2 h-2 rounded-full bg-white ml-auto"></div>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-600 ml-4">
                {order.progress}%
              </span>
            </div>
          )}
          {order.avatars && (
            <div className="flex items-center mt-4">
              {order.avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="Avatar"
                  className={`w-8 h-8 rounded-full object-cover block ${
                    index !== 0 ? "-ml-3" : ""
                  }`}
                />
              ))}
            </div>
          )}
          {order.link && (
            <a
              href={order.link}
              className="text-blue-500 font-medium text-sm hover:text-blue-600"
            >
              View details
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
