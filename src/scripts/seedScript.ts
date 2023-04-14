import { openDB } from "idb";
import { DATABASE_NAME, STORE_NAME } from "../helpers/constants";
import { SAMPLE_DATA } from "../data/sampleData";

async function seedDatabase() {
  const db = await openDB(DATABASE_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME);
    },
  });

  // await new Promise((res) => setTimeout(() => res(true), 5000));
  await Promise.allSettled(
    SAMPLE_DATA.map((habit) => {
      return db.put(STORE_NAME, habit, habit.date);
    })
  );

  console.log(`Your ${DATABASE_NAME} has been seeded with information.`);
}

export default seedDatabase;
