import { useState } from "react";
import MonthView from "./MonthView";
import Days from "./Days";

interface Props {
	onDateSelect: (date: Date) => void;
	selectedDate: Date;
}

const DatePicker: React.FC<Props> = ({ onDateSelect, selectedDate }) => {
	const [activeMonth, setActiveMonth] = useState(new Date());

	const handlePrevMonth = () => {
		setActiveMonth((prevDate) => {
			const prevMonth = prevDate.getMonth() - 1;
			const prevYear = prevMonth === 11 ? prevDate.getFullYear() - 1 : prevDate.getFullYear();
			return new Date(prevYear, prevMonth, 1);
		});
	};

	const handleNextMonth = () => {
		setActiveMonth((prevDate) => {
			const nextMonth = prevDate.getMonth() + 1;
			const nextYear = nextMonth === 0 ? prevDate.getFullYear() + 1 : prevDate.getFullYear();
			return new Date(nextYear, nextMonth, 1);
		});
	};

	const handleDayClick = (day: number) => {
		const newDate = new Date(activeMonth.getFullYear(), activeMonth.getMonth(), day);
		setActiveMonth(newDate);
		onDateSelect(newDate);
	};

	return (
		<div className="datePicker">
			<MonthView
				onPrevClick={handlePrevMonth}
				onNextClick={handleNextMonth}
				activeMonth={activeMonth}
			/>
			<Days onDayClick={handleDayClick} activeMonth={activeMonth} selectedDate={selectedDate} />
		</div>
	);
};

export default DatePicker;
