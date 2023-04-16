import React from "react";
import { Bar } from "react-chartjs-2";

interface MoodChartProps {
	moodData: number[];
}

const MoodChart: React.FC<MoodChartProps> = ({ moodData }) => {
	const chartData = {
		labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		datasets: [
			{
				label: "Dataset 1",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				data: [...moodData],
			},
		],
	};

	const chartOptions = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Chart.js Bar Chart",
			},
		},
	};

	return <Bar data={chartData} options={chartOptions} />;
};

export default MoodChart;
