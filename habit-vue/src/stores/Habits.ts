import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { HabitData } from '@utils/interfaces';

export const useHabitsStore = defineStore('habits', () => {
	const habits = useLocalStorage('habits:data', [] as HabitData[]);

	const randomNumber = () => Math.floor(Math.random() * 10) + 1;
	function addHabit() {
		const currentDate = new Date();
		const randomHabit: HabitData = {
			date: currentDate.toISOString().split('T')[0],
			mood: randomNumber(),
			energy: randomNumber(),
			meditationMinutes: randomNumber(),
			glassesOfWater: randomNumber(),
			cupsOfCoffee: randomNumber(),
			weight: 5,
			gratefulFor: 'Family',
			timestamp: currentDate.getTime()
		};
		habits.value.push(randomHabit);
	}

	return { habits, addHabit };
});
