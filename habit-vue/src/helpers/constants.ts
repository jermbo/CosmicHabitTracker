import { HabitData } from './interfaces';

export const DATABASE_NAME = 'Cosmic_DB';
export const DATABASE_VERSION = 1;
export const STORE_NAME = 'Habits';

export const DEFAULT_HABIT: HabitData = {
	date: new Date().toISOString(),
	mood: 5,
	energy: 5,
	meditationMinutes: 0,
	glassesOfWater: 0,
	cupsOfCoffee: 0,
	weight: 0,
	gratefulFor: 'My family'
};
