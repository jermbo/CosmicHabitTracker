import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { HabitData } from 'src/helpers/interfaces';

export const useHabitsStore = defineStore('habits', () => {
	const habits = useLocalStorage('habits:data', [] as HabitData[]);

	function addHabit() {
		const currentDate = new Date();
		const randomHabit: HabitData = {
			date: currentDate.toISOString().split('T')[0],
			mood: 4,
			energy: 5,
			meditationMinutes: 5,
			glassesOfWater: 5,
			cupsOfCoffee: 5,
			weight: 5,
			gratefulFor: 'Family',
			timestamp: currentDate.getTime()
		};
		habits.value.push(randomHabit);
	}
	return { habits, addHabit };
});
