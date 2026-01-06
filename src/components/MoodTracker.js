import React, { useState } from "react";

function MoodTracker() {
  const [mood, setMood] = useState("");

  return (
    <div className="card">
      <h3>How are you feeling today?</h3>
      <div className="moods">
        <button onClick={() => setMood("😊 Happy")}>Happy</button>
        <button onClick={() => setMood("😔 Sad")}>Sad</button>
        <button onClick={() => setMood("😌 Calm")}>Calm</button>
        <button onClick={() => setMood("😟 Anxious")}>Anxious</button>
      </div>
      <p>Your Mood: {mood}</p>
    </div>
  );
}

export default MoodTracker;