import { defineStore } from 'pinia';
import { openDB } from 'idb';
import { HabitData } from '@utils/interfaces';
import { DATABASE_NAME, DATABASE_VERSION, STORE_NAME } from '@/utils/constants';
import { ref, toRefs, watch } from 'vue';
import { useDateStore } from './DateStore';

export const useHabitsStore = defineStore('habits', () => {
	const { activeDateStamp } = toRefs(useDateStore());

	const randomNumber = () => Math.floor(Math.random() * 10) + 1;

	const activeHabit = ref({} as HabitData);

	watch(activeDateStamp, async (newDateStamp) => {
		const habit = await getHabitByDate(newDateStamp);
		activeHabit.value = habit;
	});

	const getAllData = async () => {
		const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
		const transaction = db.transaction(STORE_NAME, 'readonly');
		const store = transaction.objectStore(STORE_NAME);
		const allData: HabitData[] = await store.getAll();
		return allData;
	};

	const habits = (async () => await getAllData())();

	const getHabitByDate = async (date: string) => {
		const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
		const transaction = db.transaction(STORE_NAME, 'readonly');
		const store = transaction.objectStore(STORE_NAME);
		const index = store.index('date');
		const habit: HabitData = await index.get(date);
		return habit;
	};

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

	return { habits, activeHabit, seedIndexedDB, getHabitByDate, getAllData };
});
