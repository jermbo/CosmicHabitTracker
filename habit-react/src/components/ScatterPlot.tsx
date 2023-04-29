import { ChartOptions } from "chart.js";
import { Scatter } from "react-chartjs-2";
import { HabitData } from "../helpers/interfaces";

interface Props {
	habits: HabitData[];
}

const ScatterPlot = ({ habits }: Props) => {
	const chartData = {
		datasets: [
			{
				label: "Mood vs. Glasses of Water",
				data: habits.map((habit) => ({
					x: habit.mood,
					y: habit.glassesOfWater,
				})),
				backgroundColor: "rgba(54, 162, 235, 0.2)",
				borderColor: "rgba(54, 162, 235, 1)",
				borderWidth: 1,
			},
			{
				label: "Mood vs. Meditation",
				data: habits.map((habit) => ({
					x: habit.mood,
					y: habit.meditationMinutes,
				})),
				backgroundColor: "rgba(255, 162, 235, 0.2)",
				borderColor: "rgba(255, 162, 235, 1)",
				borderWidth: 1,
			},
		],
	};

	// Defining chart options
	const chartOptions = {
		scales: {
			x: {
				title: {
					display: true,

					font: {
						size: 16,
					},
				},
				min: 0,
				max: 10,
			},
			y: {
				title: {
					display: true,
					font: {
						size: 16,
					},
				},
				min: 0,
				max: 10,
			},
		},
	};

	return <Scatter data={chartData} options={chartOptions} />;
};

export default ScatterPlot;
