import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DynamicBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales 2024",
        data: [30, 50, 40, 60, 70],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Sales 2023",
        data: [20, 40, 35, 50, 65],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  });

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <Bar
        data={chartData}
        options={{ responsive: true, plugins: { legend: { position: "top" } } }}
      />
    </div>
  );
};

export default DynamicBarChart;
