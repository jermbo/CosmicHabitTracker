export interface HabitData {
	date: string;
	mood: number;
	energy: number;
	meditationMinutes: number;
	glassesOfWater: number;
	gratefulFor: string;
	timestamp?: number;
}

export interface Quote {
	text: string;
	author: string | null;
}
