import { IDBPDatabase, openDB } from "idb";
import { DATABASE_NAME, DATABASE_VERSION, STORE_NAME } from "./constants";
import { HabitData } from "./interfaces";
import { DEFAULT_HABIT } from "./constants";

export async function setupDB() {
  const db = await openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
  return db;
}

export const getAllHabits = async (): Promise<HabitData[]> => {
  const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  const habits = await store.getAll();
  await tx.done;
  return habits;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getHabit = async (date: Date): Promise<HabitData> => {
  try {
    const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
    const theDate = formatDate(date);
    const data: HabitData = await db.get(STORE_NAME, theDate);
    return data;
  } catch (err) {
    return DEFAULT_HABIT;
  }
};

export const saveHabit = async (habit: HabitData, date: Date) => {
  const db = await openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME);
    },
  });
  const formattedDate = formatDate(date);
  try {
    await db.put(STORE_NAME, habit, formattedDate);
  } catch (err) {
    await db.add(STORE_NAME, habit, formattedDate);
  }
};

// export const addHabit = async (habit: HabitData, date: Date) => {
//   const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
//   const formattedDate = formatDate(date);
//   await db.add(STORE_NAME, habit, formattedDate);
// };

const getWeekNumOfMonthOfDate = (date: Date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return Math.ceil((date.getDate() + (firstDay - 1)) / 7);
};

export const getHabitsForWeek = async (date: Date): Promise<HabitData[]> => {
  const { startOfWeek, endOfWeek } = getStartAndEndOfWeek(date);

  const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  const habits = (await store.getAll()) as HabitData[];

  const habitsForWeek = habits.filter((habit) => {
    const habitDate = new Date(habit.date);
    return habitDate >= startOfWeek && habitDate <= endOfWeek;
  });

  return habitsForWeek;
};

function getStartAndEndOfWeek(date: Date) {
  const currDayOfWeek = date.getDay();
  const currDate = date.getDate();
  const diff = currDate - currDayOfWeek + (currDayOfWeek === 0 ? -6 : 0);
  const startOfWeek = new Date(date.setDate(diff));
  const endOfWeek = new Date(date.setDate(date.getDate() + 6));

  return { startOfWeek, endOfWeek };
}

export async function getMoodForWeek(date: Date): Promise<number[]> {
  const { startOfWeek, endOfWeek } = getStartAndEndOfWeek(date);
  const habits = await getAllHabits();
  const weeklyMoods = habits.filter((habit) => {
    const habitDate = new Date(habit.date);
    return habitDate >= startOfWeek && habitDate <= endOfWeek;
  });
  const moodData = weeklyMoods.map((habit) => habit.mood);
  return moodData;
}
