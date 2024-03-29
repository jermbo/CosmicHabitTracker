import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import HabitPage from "./pages/Habit";
import DashboardPage from "./pages/Dashboard";

import Navigation from "./components/Navigation";

import seedDatabase from "./scripts/seedScript";
import Loading from "./components/Loading";
import WelcomePage from "./pages/Welcome";

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
			<div className="p-4">
				<Routes>
					<Route path="/" element={<WelcomePage />} />
					<Route path="/habit" element={<HabitPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
