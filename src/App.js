import React,{ useState } from "react";
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
     <div id="home"><Navbar /></div> 
      <div id="motivation"><Motivation /></div>
      <div id="mood">
  <MoodTracker />
</div>
      
<div id="breathing">
  <Breathing />
</div>
      <div id="music">
  <Music />
</div>
    </div>
  );
}

export default App;