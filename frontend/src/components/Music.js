import React, { useState, useRef } from "react";

function Music() {
  // playlist
  const songs = [
    { title: "Peaceful Mind", file: "/music/music1.mp3" },
    { title: "Deep Relaxation", file: "/music/music2.mp3" },
    { title: "Calm Ocean", file: "/music/music3.mp3" },
    { title: "Gentle Rain", file: "/music/music4.mp3" },
    { title: "Soothing Piano", file: "/music/music5.mp3" },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(null);

  const playMusic = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setPlaying(false);
  };

  return (
    <div className="card4">
      <div className="card4h3">Relaxing Music</div>
<div className="player">
      <h2>{songs[currentSongIndex].title}</h2>

      <audio ref={audioRef} src={songs[currentSongIndex].file} />
      </div>

      <div className="controls">
        <button onClick={playMusic}>⏸</button>
        <button onClick={pauseMusic}>▶</button>
        <button onClick={nextSong}>⏭</button>
      </div>
    </div>
  );
}

export default Music;
