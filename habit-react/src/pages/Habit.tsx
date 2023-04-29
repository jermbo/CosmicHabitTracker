import { useState, useEffect } from "react";

import HabitForm from "../components/HabitForm";
import PageHeader from "../components/PageHeader";
import DatePicker from "../components/datepicker/DatePicker";

import { saveHabit, getHabit, formatDate } from "../helpers/helpers";
import { HabitData } from "../../../data/sampleData";
import { DEFAULT_HABIT } from "../helpers/constants";
import seedDatabase from "../scripts/seedScript";

const HabitPage: React.FC = () => {
	const [habit, setHabit] = useState<HabitData>(DEFAULT_HABIT);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());

	useEffect(() => {
		getHabitForDay();
	}, [selectedDate]);

	async function getHabitForDay() {
		const selectedHabit = await getHabit(selectedDate);

		if (selectedHabit) {
			setHabit(selectedHabit);
		} else {
			setHabit({ ...DEFAULT_HABIT, date: formatDate(selectedDate) });
		}
	}

	async function handleHabitChange(habit: HabitData) {
		await saveHabit(habit, selectedDate);
	}

	const handleDateSelect = (date: Date) => {
		setSelectedDate(date);
	};

	return (
		<>
			<PageHeader title="Habit" subtitle="Capture your habit for today" />
			<DatePicker onDateSelect={handleDateSelect} selectedDate={selectedDate} />
			<div className="py-6">
				<HabitForm habit={habit} onHabitChange={handleHabitChange} />
			</div>
		</>
	);
};

export default HabitPage;
