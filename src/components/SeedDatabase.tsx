import seedDatabase from "../scripts/seedScript";

function SeedDatabase() {
  return <button onClick={() => seedDatabase()}>Seed Database</button>;
}

export default SeedDatabase;
