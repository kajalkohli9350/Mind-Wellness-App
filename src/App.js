import React from "react";
import Navbar from "./components/Navbar";
import Motivation from "./components/Motivation";
import MoodTracker from "./components/MoodTracker";
import Breathing from "./components/Breathing";
import Music from "./components/Music";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className= "appinner"><h2>🧘 Mental Wellness</h2></div>
      <Navbar />
      <Motivation />
      <MoodTracker />
      <Breathing />
      <Music />
    </div>
  );
}

export default App;