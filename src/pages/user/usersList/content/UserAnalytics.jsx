import {
  FaUserFriends,
  FaUserPlus,
  FaUserCheck,
  FaUserClock,
} from "react-icons/fa";

const AnalyticsCard = ({
  title,
  value,
  change,
  icon: Icon,
  iconBg,
  description,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between">
      <div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-semibold">
          {value}{" "}
          <span className={change > 0 ? "text-green-500" : "text-red-500"}>
            ({change > 0 ? `+${change}%` : `${change}%`})
          </span>
        </p>
        <p className="text-gray-400 text-xs mt-1">{description}</p>
      </div>
      <div
        className={`p-3 rounded-lg ${iconBg} flex items-center justify-center`}
      >
        <Icon className="text-xl" />
      </div>
    </div>
  );
};

export const UserAnalytics = () => {
  const data = [
    {
      title: "Session",
      value: "21,459",
      change: 29,
      icon: FaUserFriends,
      iconBg: "bg-indigo-100 text-indigo-500",
      description: "Total Users",
    },
    {
      title: "Paid User",
      value: "4,567",
      change: 18,
      icon: FaUserPlus,
      iconBg: "bg-red-100 text-red-500",
      description: "Last week analytics",
    },
    {
      title: "Active Users",
      value: "19,860",
      change: -14,
      icon: FaUserCheck,
      iconBg: "bg-green-100 text-green-500",
      description: "Last week analytics",
    },
    {
      title: "Pending Users",
      value: "237",
      change: 42,
      icon: FaUserClock,
      iconBg: "bg-yellow-100 text-yellow-500",
      description: "Last week analytics",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <AnalyticsCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default UserAnalytics;
