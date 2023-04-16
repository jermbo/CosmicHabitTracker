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
    <div className="welcome-page">
      <h1 className="text-3xl">Cosmic Tracker</h1>
      <div className="quote-wrapper">
        {quote && (
          <>
            <blockquote>{quote.text}</blockquote>
            <cite>{quote.author}</cite>
          </>
        )}
      </div>

      <Link to="/habit">Go to Habit Page</Link>
    </div>
  );
}

export default WelcomePage;
