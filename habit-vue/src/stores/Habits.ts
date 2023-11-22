import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { HabitData } from 'src/helpers/interfaces';

const randomNumber = () => Math.floor(Math.random() * 10) + 1;
export const useHabitsStore = defineStore('habits', () => {
	const habits = useLocalStorage('habits:data', [] as HabitData[]);

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
