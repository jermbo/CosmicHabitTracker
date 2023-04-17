import { Link } from "react-router-dom";
import Quote from "../components/Quote";

function WelcomePage() {
	return (
		<>
			<section className="bg-gray-900 text-white">
				<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
					<div className="mx-auto max-w-3xl text-center">
						<h1 className="title">Cosmic Tracker</h1>

						<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
							Tracking Habits made simple. Data kept private.
						</p>

						<Quote />

						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<Link className="button" to="/habit">
								Start Tracking Today
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default WelcomePage;
