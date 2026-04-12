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
    <div className="card1">
      <div className="card1h3"><h3>Daily Motivation</h3></div>
      <div className="overlay"><p >{quote}</p>
      
      </div>
      
      <div className="new-quote-button">
        
        <button onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}>
        New Quote
      </button>
      {/* <div className="quote-image"> */}
       <img src="/yoga.gif" alt="Yoga Motivation" /> </div>
       {/* </div> */}
    </div>
  );
}

export default Motivation;