import { Link } from "react-router-dom";
import Quote from "../components/Quote";

function WelcomePage() {
	return (
		<section className="pt-32">
			<div className="flex flex-col items-center gap-4">
				<div className="flex flex-col">
					<h1 className="title">Cosmic Tracker</h1>
					<p className="text-xl">Tracking Habits made simple. Data kept private.</p>
				</div>

				<Quote />

				<div className="mt-8">
					<Link className="button" to="/habit">
						Start Tracking Today
					</Link>
				</div>
			</div>
		</section>
	);
}

export default WelcomePage;
