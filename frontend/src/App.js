import Navbar from "./components/Navbar";
import Motivation from "./components/Motivation";
import MoodTracker from "./components/MoodTracker";
import Breathing from "./components/Breathing";
import Music from "./components/Music";
import "./App.css";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="app">
      <div className="appinner">
        <h2>🧘 Mental Wellness</h2>
      </div>
      <Navbar />
      <div id="motivation">
        <Motivation />
      </div>

      <div id="mood">
        <MoodTracker setSelectedMood={setSelectedMood} />
      </div>

      <div id="breathing">
        <Breathing />
      </div>
      <div id="music">
        <Music selectedMood={selectedMood} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
