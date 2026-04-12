import React, { useState, useEffect } from "react";

function Breathing() {

  // stores breathing step text
  const [step, setStep] = useState("Ready?");
  
  // controls if exercise running
  const [running, setRunning] = useState(false);

  // controls animation class
  const [circleClass, setCircleClass] = useState("circle");

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setStep((prev) => {
          if (prev === "Ready?" || prev === "Breathe Out") {
            setCircleClass("circle grow");
            return "Breathe In";
          }
          if (prev === "Breathe In") {
            return "Hold";
          }
          if (prev === "Hold") {
            setCircleClass("circle shrink");
            return "Breathe Out";
          }
        });
      }, 4000); // change step every 4 seconds
    }

    return () => clearInterval(interval);
  }, [running]);


  return (
    <div className="card3">
      <div className="card3h3">
        <h3>Breathing Exercise</h3>
      </div>
      <div className="breathing-container">
        <div className={circleClass}></div>
        <h2>{step}</h2>
      </div>

      <div className="exercisebutton">
        <button onClick={() => setRunning(true)}>Start Exercise</button>
        <button onClick={() => setRunning(false)}>Pause Exercise</button>
      </div>
    </div>
  );
}

export default Breathing;
