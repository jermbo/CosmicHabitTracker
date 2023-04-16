interface Props {
	onPrevClick: () => void;
	onNextClick: () => void;
	activeMonth: Date;
}

const MonthView = ({ onPrevClick, onNextClick, activeMonth }: Props) => {
	const getMonthName = (month: number) => {
		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		return monthNames[month];
	};
	return (
		<div className="month">
			<button className="btn prev" onClick={onPrevClick}>
				{"<"}
			</button>
			<p className="currentMonth">
				<span>{getMonthName(activeMonth.getMonth())}</span>
				<span>{activeMonth.getFullYear()}</span>
			</p>
			<button className="btn next" onClick={onNextClick}>
				{">"}
			</button>
		</div>
	);
};

export default MonthView;
