import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { openDB } from 'idb';
import { HabitData } from '@utils/interfaces';
import { DATABASE_NAME, DATABASE_VERSION, STORE_NAME } from '@/utils/constants';

export const useHabitsStore = defineStore('habits', () => {
	const habits = useLocalStorage('habits:data', [] as HabitData[]);

	const randomNumber = () => Math.floor(Math.random() * 10) + 1;
	function addHabit() {
		console.log('Adding habit');
	}

	async function seedIndexedDB() {
		const db = await openDB(DATABASE_NAME, DATABASE_VERSION, {
			upgrade(db) {
				if (!db.objectStoreNames.contains(STORE_NAME)) {
					const habitsStore = db.createObjectStore(STORE_NAME, {
						keyPath: 'timestamp'
					});
					habitsStore.createIndex('date', 'date');
				}
			}
		});

		const currentDate = new Date();
		const startDate = new Date(currentDate.getTime() - 14 * 24 * 60 * 60 * 1000);

		for (let date = startDate; date <= currentDate; date.setDate(date.getDate() + 1)) {
			const habit: HabitData = {
				date: date.toISOString().split('T')[0],
				mood: randomNumber(),
				energy: randomNumber(),
				meditationMinutes: randomNumber(),
				glassesOfWater: randomNumber(),
				cupsOfCoffee: randomNumber(),
				weight: 5,
				gratefulFor: 'Family',
				timestamp: date.getTime()
			};
			await db.add(STORE_NAME, habit);
		}
	}

	return { habits, addHabit, seedIndexedDB };
});
