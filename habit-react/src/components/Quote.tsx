import { useEffect, useState } from "react";
import quotesData from "../data/quotes";
import { Quote } from "../helpers/interfaces";

function Quote() {
	const [quote, setQuote] = useState<Quote>();

	useEffect(() => {
		const randomQuoteIndex = Math.floor(Math.random() * quotesData.length);
		const randomQuote = quotesData[randomQuoteIndex];
		setQuote(randomQuote);
	}, []);

	return (
		<>
			{quote && (
				<div className="quote flex flex-col justify-end items-end">
					<blockquote className="mx-auto mt-4 max-w-xl sm:text-2xl/relaxed">
						{quote.text}
					</blockquote>
					<cite className="">- {quote.author}</cite>
				</div>
			)}
		</>
	);
}

export default Quote;
