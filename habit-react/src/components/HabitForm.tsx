import { useEffect, useState } from "react";
import { HabitData } from "../../../data/sampleData";

interface Props {
	habit: HabitData;
	onHabitChange: (habit: HabitData) => void;
}

const HabitForm = ({ habit, onHabitChange }: Props) => {
	const [mood, setMood] = useState(habit.mood);
	const [energy, setEnergy] = useState(habit.energy);
	const [meditationMinutes, setMeditationMinutes] = useState(habit.meditationMinutes);
	const [glassesOfWater, setGlassesOfWater] = useState(habit.glassesOfWater);
	const [cupsOfCoffee, setCupsOfCoffee] = useState(habit.cupsOfCoffee);
	const [weight, setWeight] = useState(habit.weight);
	const [gratefulFor, setGratefulFor] = useState(habit.gratefulFor);

	useEffect(() => {
		setMood(habit.mood);
		setEnergy(habit.energy);
		setMeditationMinutes(habit.meditationMinutes);
		setGlassesOfWater(habit.glassesOfWater);
		setCupsOfCoffee(habit.cupsOfCoffee);
		setWeight(habit.weight);
		setGratefulFor(habit.gratefulFor);
	}, [habit]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const updatedHabit: HabitData = {
			date: habit.date,
			mood,
			energy,
			meditationMinutes,
			glassesOfWater,
			weight,
			cupsOfCoffee,
			gratefulFor,
		};
		onHabitChange(updatedHabit);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col gap-5">
				<div className="flex gap-5">
					<label htmlFor="mood" className="label">
						<input
							id="mood"
							type="number"
							value={mood}
							min={1}
							max={10}
							onChange={(event) => setMood(Number(event.target.value))}
							className="peer input"
						/>

						<span className="peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs ">
							Mood
						</span>
					</label>

					<label htmlFor="energy" className="label">
						<input
							id="energy"
							type="number"
							value={energy}
							min={1}
							max={10}
							onChange={(event) => setEnergy(Number(event.target.value))}
							className="peer input"
						/>

						<span className="peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs ">
							Energy
						</span>
					</label>

					<label htmlFor="meditationMinutes" className="label">
						<input
							id="meditationMinutes"
							type="number"
							value={meditationMinutes}
							min={0}
							step={0.5}
							onChange={(event) => setMeditationMinutes(Number(event.target.value))}
							className="peer input"
						/>

						<span className="peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs ">
							Meditation Minutes
						</span>
					</label>

					<label htmlFor="glassesOfWater" className="label">
						<input
							id="glassesOfWater"
							type="number"
							value={glassesOfWater}
							min={0}
							onChange={(event) => setGlassesOfWater(Number(event.target.value))}
							className="peer input"
						/>

						<span className="peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs ">
							Glasses of Water
						</span>
					</label>

					<label htmlFor="cupsOfCoffee" className="label">
						<input
							id="cupsOfCoffee"
							type="number"
							value={cupsOfCoffee}
							min={0}
							onChange={(event) => setCupsOfCoffee(Number(event.target.value))}
							className="peer input"
						/>

						<span className="peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs ">
							Cups of Coffee
						</span>
					</label>

					<label htmlFor="weight" className="label">
						<input
							id="weight"
							type="number"
							value={weight}
							min={0}
							onChange={(event) => setWeight(Number(event.target.value))}
							className="peer input"
						/>

						<span className="peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs ">
							Weight
						</span>
					</label>
				</div>
				<div className="">
					<label htmlFor="gratefulFor" className="label">
						<textarea
							id="gratefulFor"
							value={gratefulFor}
							onChange={(event) => setGratefulFor(event.target.value)}
							maxLength={250}
							rows={4}
							cols={50}
							className="peer input"
						/>

						<span className="peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs ">
							Grateful for:
						</span>
					</label>
				</div>
				<div className="flex justify-end">
					<button type="submit" className="button">
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default HabitForm;
