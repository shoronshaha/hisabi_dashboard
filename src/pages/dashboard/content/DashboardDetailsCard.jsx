import { DollarSign, FileText, ShoppingCart, TrendingUp } from "lucide-react";

function DashboardDetailsCard() {
  const data = [
    {
      value: "33",
      label: "গ্রাহকরা",
      icon: <ShoppingCart size={50} />,
    },
    {
      value: "13",
      label: "সরবরাহকারীদের",
      icon: <DollarSign size={50} />,
    },
    {
      value: "30",
      label: "ক্রয়",
      icon: <TrendingUp size={50} />,
    },
    {
      value: "283",
      label: "চালান",
      icon: <FileText size={50} />,
    },
  ];

  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-lg p-5 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white"
        >
          <div className="flex items-center">
            <div className="p-5 bg-blue-700 rounded-full text-white flex items-center justify-center transition-all transform hover:scale-110">
              {item.icon}
            </div>
            <div className="pl-3 text-black">
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="text-sm">{item.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardDetailsCard;
