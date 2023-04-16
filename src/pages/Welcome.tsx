import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import quotesData from "../data/quotes";
import { Quote } from "../helpers/interfaces";

function WelcomePage() {
	const [quote, setQuote] = useState<Quote>();

	useEffect(() => {
		// Select a random quote from the data
		const randomQuoteIndex = Math.floor(Math.random() * quotesData.length);
		const randomQuote = quotesData[randomQuoteIndex];
		setQuote(randomQuote);
	}, []);

	return (
		<>
			<section className="bg-gray-900 text-white">
				<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
					<div className="mx-auto max-w-3xl text-center">
						<h1 className="title">Cosmic Tracker</h1>

						<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">Tracking Habits made simple. Data kept private.</p>

						{quote && (
							<>
								<blockquote className="mx-auto mt-4 max-w-xl sm:text-4xl/relaxed bg-gradient-to-b from-pink-400 to-blue-400 text-transparent bg-clip-text">
									{quote.text}
								</blockquote>
								<cite className="">- {quote.author}</cite>
							</>
						)}

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
