import React, { useState, useEffect } from "react";

function Breathing() {

  // stores breathing step text
  const [step, setStep] = useState("Ready?");
  
  // controls if exercise running
  const [running, setRunning] = useState(false);

  // controls animation class
  const [circleClass, setCircleClass] = useState("circle");

  // controls count for each step (not currently used but can be used to show countdown)
   const [count, setCount] = useState(4);
 // STEP TIMER (changes breathing phase every 4 sec)
  useEffect(() => {
    let stepInterval;

    if (running) {
      stepInterval = setInterval(() => {
        setCount(4); // reset countdown when step changes

        setStep((prev) => {
          if (prev === "Ready?" || prev === "Breathe Out") {
            setCircleClass("circle grow");
            return "Breathe In";
          }
          if (prev === "Breathe In") return "Hold";
          if (prev === "Hold") {
            setCircleClass("circle shrink");
            return "Breathe Out";
          }
        });
      }, 4000);
    }

    return () => clearInterval(stepInterval);
  }, [running]);

  // COUNTDOWN TIMER (runs every second)
  useEffect(() => {
    let countInterval;

    if (running) {
      countInterval = setInterval(() => {
        setCount((prev) => (prev === 1 ? 4 : prev - 1));
      }, 1000);
    }

    return () => clearInterval(countInterval);
  }, [running]);


  return (
    <div className="card3">
      <div className="card3h3">
        <h3>Breathing Exercise</h3>
      </div>
     <div className="breathing-container">

  {/* Background image circle */}
  <div className="bg-circle"></div>

  {/* Animated breathing circle */}
  <div className={circleClass}></div>

  {/* Timer text */}
  <h1 className="timer">{count}..</h1>

  <div className="step-text">
    <h2>{step}</h2></div>

</div>

      <div className="exercisebutton">
        <button onClick={() => setRunning(true)}>Start Exercise</button>
        <button onClick={() => setRunning(false)}>Pause Exercise</button>
      </div>
    </div>
  );
}

export default Breathing;
