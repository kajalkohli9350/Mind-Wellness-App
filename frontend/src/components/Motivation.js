import React, { useState } from "react";

function Motivation() {
  const quotes = [
    "You are stronger than you think",
    "Take a deep breath",
    "One step at a ahead",
    "Your mental health matters",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  // Function to get a new random quote, not repeating the current one
  const getNewQuote = () => {
    if (quotes.length === 1) return quotes[0];
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === quote);
    return newQuote;
  };

  return (
    <div className="card1">
      <div className="card1h3">
        <h3>Daily Motivation</h3>
      </div>
      <div className="overlay">
        <p>{quote}</p>
      </div>

      <div className="new-quote-button">
        <button
          onClick={() => setQuote(getNewQuote())}
        >
          New Quote
        </button>
         <div className="quote-image">
        <img src="/yoga.gif" alt="Yoga Motivation" />{" "}
      </div>
      </div>
     
    </div>
  );
}

export default Motivation;
