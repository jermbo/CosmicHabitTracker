import { useEffect, useState } from "react";
import { HabitData } from "../helpers/interfaces";

interface Props {
  habit: HabitData;
  onHabitChange: (habit: HabitData) => void;
}

const HabitForm = ({ habit, onHabitChange }: Props) => {
  const [mood, setMood] = useState(habit.mood);
  const [energy, setEnergy] = useState(habit.energy);
  const [meditationMinutes, setMeditationMinutes] = useState(
    habit.meditationMinutes
  );
  const [glassesOfWater, setGlassesOfWater] = useState(habit.glassesOfWater);
  const [gratefulFor, setGratefulFor] = useState(habit.gratefulFor);

  useEffect(() => {
    setMood(habit.mood);
    setEnergy(habit.energy);
    setMeditationMinutes(habit.meditationMinutes);
    setGlassesOfWater(habit.glassesOfWater);
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
      gratefulFor,
    };
    onHabitChange(updatedHabit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Mood:</label>
        <input
          type="number"
          value={mood}
          min={1}
          max={10}
          onChange={(event) => setMood(Number(event.target.value))}
        />
      </div>
      <div>
        <label>Energy:</label>
        <input
          type="number"
          value={energy}
          min={1}
          max={10}
          onChange={(event) => setEnergy(Number(event.target.value))}
        />
      </div>
      <div>
        <label>Meditation Minutes:</label>
        <input
          type="number"
          value={meditationMinutes}
          min={0}
          step={0.5}
          onChange={(event) => setMeditationMinutes(Number(event.target.value))}
        />
      </div>
      <div>
        <label>Glasses of Water:</label>
        <input
          type="number"
          value={glassesOfWater}
          min={0}
          onChange={(event) => setGlassesOfWater(Number(event.target.value))}
        />
      </div>
      <div>
        <label>Grateful For:</label>
        <textarea
          value={gratefulFor}
          onChange={(event) => setGratefulFor(event.target.value)}
          maxLength={250}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default HabitForm;
