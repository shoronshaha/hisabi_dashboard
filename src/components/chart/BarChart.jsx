import Chart from "react-apexcharts";
import { HiDotsVertical } from "react-icons/hi";

export const BarChart = () => {
  const handleTimeframeChange = (timeframe) => {
    console.log(timeframe);
  };

  const series = [
    {
      name: "Operations",
      data: [100, 50, 11, 16, 22, 30],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 5,
        distributed: true,
      },
    },
    xaxis: {
      categories: ["Book", "Ticket", "Reissue", "Refund", "Void", "Cancel"],
    },
    yaxis: {
      title: {
        text: "Count",
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    fill: {
      colors: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
        "#f0abfc",
      ],
    },
    legend: {
      show: false,
    },
  };

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2 bg-white">
        <h5 className="mb-0 text-[1rem] font-semibold leading-6">Booking</h5>
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

      <div id="customer-rate-graph" className="p-2 bg-white mb-4">
        <Chart options={options} series={series} type="bar" height={400} />
      </div>
    </>
  );
};
