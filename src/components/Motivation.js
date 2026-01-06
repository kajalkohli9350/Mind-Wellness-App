import React, { useState } from "react";

function Motivation() {
  const quotes = [
    "You are stronger than you think",
    "Take a deep breath",
    "One step at a time",
    "Your mental health matters"
  ];

  const [quote, setQuote] = useState(quotes[0]);

  return (
    <div className="card">
      <h3>Daily Motivation</h3>
      <p>{quote}</p>
      <button onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}>
        New Quote
      </button>
    </div>
  );
}

export default Motivation;