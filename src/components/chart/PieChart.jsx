/* eslint-disable react/prop-types */
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { HiDotsVertical } from "react-icons/hi";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const data = {
    labels: ["Mobile", "Tablet", "Computer"],
    datasets: [
      {
        data: [100, 50, 11],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
      {
        data: [200, 60, 16],
        backgroundColor: ["#FF638", "#7FFFD4", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    layout: {
      padding: 0,
    },
  };

  const handleTimeframeChange = (timeframe) => {
    console.log(timeframe);
  };

  return (
    <div className="bg-white rounded-md">
      <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2">
        <h5 className="mb-0 text-[1rem] font-semibold leading-6">
          User Device
        </h5>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="py-1 bg-gray-50">
            <HiDotsVertical className="w-5 h-6 px-1 text-gray-400" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-md z-[1] w-40 p-2 border border-gray-100 shadow-md shadow-black/5"
          >
            <li className="py-1 leading-5">
              <a onClick={() => handleTimeframeChange("Today")}>Today</a>
            </li>
            <li className="py-1 leading-5">
              <a onClick={() => handleTimeframeChange("This Week")}>
                This Week
              </a>
            </li>
            <li className="py-1 leading-5">
              <a onClick={() => handleTimeframeChange("Last Week")}>
                Last Week
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-6 pb-3 m-0 flex justify-center">
        <div className="w-[300px] h-[300px]">
          {" "}
          {/* Set width and height to make the pie chart smaller */}
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
