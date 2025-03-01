import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      { name: "Sales", data: [] },
      { name: "Orders", data: [] },
      { name: "Revenue", data: [] },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
        zoom: { enabled: true },
        toolbar: { show: false }, // Hide toolbar on small screens
      },
      stroke: { curve: "smooth", width: 2 },
      grid: { borderColor: "#e5e7eb" },
      xaxis: {
        categories: [],
        labels: { rotate: -45 },
      },
      yaxis: {
        title: { text: "Amount" },
      },
      colors: ["#4f46e5", "#f43f5e", "#22c55e"],
      tooltip: { enabled: true },
      legend: { position: "top", horizontalAlign: "center" },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: { height: 300 },
            legend: { position: "bottom" },
            xaxis: { labels: { rotate: 0 } },
          },
        },
      ],
    },
  });

  useEffect(() => {
    const fetchData = () => {
      const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
      const salesData = categories.map(
        () => Math.floor(Math.random() * 5000) + 1000
      );
      const ordersData = categories.map(
        () => Math.floor(Math.random() * 3000) + 500
      );
      const revenueData = categories.map(
        () => Math.floor(Math.random() * 8000) + 2000
      );

      setChartData((prev) => ({
        ...prev,
        series: [
          { name: "Sales", data: salesData },
          { name: "Orders", data: ordersData },
          { name: "Revenue", data: revenueData },
        ],
        options: { ...prev.options, xaxis: { categories } },
      }));
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Auto-refresh data every 5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 shadow rounded-md w-full">
      <h2 className="text-lg font-semibold mb-2">Business Performance</h2>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
