import React from "react";

function Music() {
  return (
    <div className="card">
      <h3>Relaxing Music</h3>
      <audio controls>
        <source src="music.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}

export default Music;