import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const RadarChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      { name: "Budget Report", data: [] },
      { name: "Allocated Budget", data: [] },
      { name: "Actual Spending", data: [] },
    ],
    options: {
      chart: {
        type: "radar",
        height: 350,
      },
      stroke: { width: 2 },
      fill: { opacity: 0.3 },
      markers: { size: 4 },
      xaxis: {
        categories: [],
      },
      yaxis: {
        show: false,
      },
      legend: { position: "top", horizontalAlign: "center" },
      colors: ["#4f46e5", "#f43f5e", "#22c55e"],
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: { height: 300 },
            legend: { position: "bottom" },
          },
        },
      ],
    },
  });

  useEffect(() => {
    const fetchData = () => {
      const categories = [
        "Marketing",
        "Operations",
        "IT",
        "HR",
        "Sales",
        "R&D",
      ];
      const budgetReport = categories.map(
        () => Math.floor(Math.random() * 10000) + 2000
      );
      const allocatedBudget = categories.map(
        () => Math.floor(Math.random() * 12000) + 3000
      );
      const actualSpending = categories.map(
        () => Math.floor(Math.random() * 9000) + 1500
      );

      setChartData((prev) => ({
        ...prev,
        series: [
          { name: "Budget Report", data: budgetReport },
          { name: "Allocated Budget", data: allocatedBudget },
          { name: "Actual Spending", data: actualSpending },
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
      <h2 className="text-lg font-semibold mb-2">Budget Performance</h2>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="radar"
        height={350}
      />
    </div>
  );
};

export default RadarChart;
