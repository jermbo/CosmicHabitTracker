<template>
	<button @click="seedData">Seed Data</button>
	<button @click="deleteData">Delete Data</button>
</template>

<script setup lang="ts">
import { openDB, deleteDB, DBSchema } from 'idb';
import { DATABASE_NAME, DATABASE_VERSION, STORE_NAME } from '../helpers/constants';
import { HabitData } from '../helpers/interfaces';

const generateSeedData = (): HabitData[] => {
	const seedData: HabitData[] = [];
	const today = new Date();
	const twoWeeksAgo = new Date();
	twoWeeksAgo.setDate(today.getDate() - 14);

	for (let d = twoWeeksAgo; d <= today; d.setDate(d.getDate() + 1)) {
		const date = d.toISOString().split('T')[0];
		seedData.push({
			date,
			mood: Math.floor(Math.random() * 10) + 1,
			energy: Math.floor(Math.random() * 10) + 1,
			meditationMinutes: Math.floor(Math.random() * 60),
			glassesOfWater: Math.floor(Math.random() * 10),
			cupsOfCoffee: Math.floor(Math.random() * 5),
			weight: Math.floor(Math.random() * 20) + 60,
			gratefulFor: 'Life',
			timestamp: d.getTime()
		});
	}

	return seedData;
};

const deleteData = async () => {
	await deleteDB(DATABASE_NAME);
};

interface MyDB extends DBSchema {
	habits: HabitData[];
}

const seedData = async () => {
	const data = generateSeedData();
	const db = await openDB<MyDB>(DATABASE_NAME, DATABASE_VERSION, {
		upgrade(db) {
			db.createObjectStore(STORE_NAME, { keyPath: 'date' });
		}
	});

	const tx = db.transaction(STORE_NAME, 'readwrite');
	const store = tx.objectStore(STORE_NAME);
	data.forEach((item) => store.put(item));
	await tx.done;
};
</script>
