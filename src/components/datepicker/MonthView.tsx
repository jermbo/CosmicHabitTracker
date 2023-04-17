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
		<div className="flex justify-center">
			<div className="inline-flex gap-4 rounded-lg border border-gray-100 bg-gray-100 px-2 dark:border-gray-800 dark:bg-gray-900">
				<button
					onClick={onPrevClick}
					className="inline-block rounded-md p-3 text-gray-500 hover:text-gray-700 focus:relative dark:text-gray-400 dark:hover:text-gray-200"
				>
					&lt;
				</button>

				<p className="flex flex-col text-center text-lg rounded-md px-4  shadow-sm focus:relative">
					<span className="font-thin ">{getMonthName(activeMonth.getMonth())}</span>
					<span className="-mt-2 font-bold tracking-widest text-2xl text-blue-500">
						{activeMonth.getFullYear()}
					</span>
				</p>

				<button
					onClick={onNextClick}
					className="inline-block rounded-md p-3 text-gray-500 hover:text-gray-700 focus:relative dark:text-gray-400 dark:hover:text-gray-200"
				>
					&gt;
				</button>
			</div>
		</div>
	);
};

export default MonthView;
