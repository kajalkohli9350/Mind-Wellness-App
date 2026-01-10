import React, { useState } from "react";


function MoodTracker() {
   // Store current mood
  // const [mood, setMood] = useState("happy");

  // Days of week
  // const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Mood values (Y-axis)
  // const moodData = {
  //   sad: [20, 30, 15, 25, 35, 20, 10],
  //   calm: [40, 50, 45, 55, 60, 50, 40],
  //   happy: [60, 70, 80, 75, 85, 90, 70],
  //   anxious: [30, 40, 55, 45, 50, 60, 45],
  // };
  return (
    <div className="card2">
      <div className="card2h3"><h3>How are you feeling today?</h3></div>

      <div className="moods">
        <button className="happy-button">😊 Happy</button>
        <button className="sad-button">😔 Sad</button>
        <button className="calm-button">😌  Calm</button>
        <button className="anxious-button">😟 Anxious</button>
      </div>
{/* 
      <div className="container">
      <h2>Mood Area Chart</h2> */}

      {/* Mood Buttons */}
      {/* <div className="buttons">
        <button onClick={() => setMood("sad")}>Sad</button>
        <button onClick={() => setMood("calm")}>Calm</button>
        <button onClick={() => setMood("happy")}>Happy</button>
        <button onClick={() => setMood("anxious")}>Anxious</button>
      </div> */}

      {/* Chart */}
      {/* <div className="chart">
        {moodData[mood].map((value, index) => (
          <div key={index} className="bar-container">
            <div
              className={`bar ${mood}`}
              style={{ height: `${value}%` }}
            ></div>
            <span>{days[index]}</span>
          </div>
        ))}
      </div>
    </div> */}
      
        <button className="clear-btn" >
        Clear Mood History
      </button>
    
    </div>
  );
}

export default MoodTracker;