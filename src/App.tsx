import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HabitPage from "./pages/Habit";
import DashboardPage from "./pages/Dashboard";

import Navigation from "./components/Navigation";

import seedDatabase from "./scripts/seedScript";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setUpStuff();
  }, []);

  async function setUpStuff() {
    await seedDatabase();
    setIsLoading(false);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HabitPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
