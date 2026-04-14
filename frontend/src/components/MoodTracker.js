import React, { useState, useEffect } from "react";
import axios from "axios";

function MoodTracker() {
  const [history, setHistory] = useState([]);

  // fetch moods from backend when page loads
  useEffect(() => {
    fetchMoods();
  }, []);

  // fetch moods from backend
  const fetchMoods = () => {
    const res = axios.get(
      "https://mind-wellness-app.onrender.com/api/moods/all",
    );
    res.then((response) => {
      setHistory(response.data);
    });
  };

  // save mood to database
  const saveMood = (mood) => {
    axios
      .post("https://mind-wellness-app.onrender.com/api/moods/add", { mood })
      .then(() => {
        fetchMoods(); // refresh history
      });
  };

  // clear database
  const clearHistory = () => {
    axios
      .delete("https://mind-wellness-app.onrender.com/api/moods/clear")
      .then(() => {
        fetchMoods();
      });
  };
  return (
    <>
      <div className="card2">
        <div className="card2h3">
          <h3>How are you feeling today?</h3>
        </div>

        <div className="moods">
          <button className="happy-button" onClick={() => saveMood("Happy")}>
            😊 Happy
          </button>

          <button className="sad-button" onClick={() => saveMood("Sad")}>
            😔 Sad
          </button>

          <button className="calm-button" onClick={() => saveMood("Calm")}>
            😌 Calm
          </button>

          <button
            className="anxious-button"
            onClick={() => saveMood("Anxious")}
          >
            😟 Anxious
          </button>
        </div>
        <div className="history">
          <div className="historyhead">
            <h3>Mood History</h3>
          </div>
          <div className="historyvalue">
            {history.map((item, index) => (
              <div key={index} className="historyItem">
                <p className="moodText">{item.mood}</p>
                <span className="timeText">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="clear-btn-container">
          <button className="clear-btn" onClick={clearHistory}>
            Clear Mood History
          </button>
        </div>
      </div>
    </>
  );
}

export default MoodTracker;
