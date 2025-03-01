import { ShoppingCart, DollarSign, TrendingUp, FileText } from "lucide-react";

const DashboardCard = () => {
  const data = [
    {
      value: "860.66K",
      label: "",
      icon: <ShoppingCart size={50} />,
    },
    {
      value: "2.98M",
      label: "বকেয়া বিক্রয়",
      icon: <DollarSign size={50} />,
    },
    {
      value: "7.62M",
      label: "বিক্রয়",
      icon: <TrendingUp size={50} />,
    },
    {
      value: "10.50K",
      label: "ব্যয়",
      icon: <FileText size={50} />,
    },
  ];

  // Define an array of gradient classes
  const gradientColors = [
    "from-blue-800 to-blue-500",
    "from-green-800 to-green-500",
    "from-red-800 to-red-500",
    "from-purple-800 to-purple-500",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols- gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className={`  rounded-lg px-3 shadow-xl text-white bg-gradient-to-r ${
            gradientColors[index % gradientColors.length]
          } p-5 `}
        >
          <div className="flex justify-between ">
            <div>
              {" "}
              <p className="text-3xl font-bold">${item.value}</p>
              <p className="text-sm">{item.label}</p>
            </div>
            <div className="pl-5 opacity-40 text-2xl transition-transform duration-300 hover:scale-125">
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
