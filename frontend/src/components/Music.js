import React, { useState, useRef } from "react";

function Music({ selectedMood }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // mood-based playlists and songs with local files
  const moodData = {
    Happy: {
      playlist: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC",
      songs: [
        { title: "Happy - Pharrell Williams", file: "/music/music1.mp3" },
        {
          title: "Can't Stop the Feeling! - Justin Timberlake",
          file: "/music/music2.mp3",
        },
        {
          title: "Uptown Funk - Mark Ronson ft. Bruno Mars",
          file: "/music/music1.mp3",
        },
        { title: "Shake It Off - Taylor Swift", file: "/music/music2.mp3" },
        { title: "Good as Hell - Lizzo", file: "/music/music1.mp3" },
      ],
    },
    Sad: {
      playlist: "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1",
      songs: [
        { title: "Someone Like You - Adele", file: "/music/music3.mp3" },
        { title: "All I Want - Kodaline", file: "/music/music4.mp3" },
        { title: "Hurt - Johnny Cash", file: "/music/music3.mp3" },
        { title: "The Night We Met - Lord Huron", file: "/music/music4.mp3" },
        { title: "Skinny Love - Bon Iver", file: "/music/music3.mp3" },
      ],
    },
    Calm: {
      playlist: "https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp",
      songs: [
        { title: "Weightless - Marconi Union", file: "/music/music5.mp3" },
        { title: "River - Joni Mitchell", file: "/music/music5.mp3" },
        { title: "Holocene - Bon Iver", file: "/music/music5.mp3" },
        { title: "The Night We Met - Lord Huron", file: "/music/music5.mp3" },
        { title: "Skinny Love - Bon Iver", file: "/music/music5.mp3" },
      ],
    },
    Anxious: {
      playlist: "https://open.spotify.com/playlist/37i9dQZF1DX4E3UdUs7fUx",
      songs: [
        { title: "River Flows in You - Yiruma", file: "/music/music1.mp3" },
        {
          title: "Comptine d'un autre été - Yann Tiersen",
          file: "/music/music3.mp3",
        },
        {
          title: "Nuvole Bianche - Ludovico Einaudi",
          file: "/music/music5.mp3",
        },
        { title: "I Giorni - Ludovico Einaudi", file: "/music/music1.mp3" },
        { title: "Experience - Ludovico Einaudi", file: "/music/music3.mp3" },
      ],
    },
  };

  const openPlaylist = (url) => {
    window.open(url, "_blank");
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSongClick = (index) => {
    if (currentSongIndex === index) {
      // Toggle play/pause for current song
      togglePlayPause();
    } else {
      // Select new song and play
      setCurrentSongIndex(index);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = data.songs[index].file;
        audioRef.current.play();
      }
    }
  };

  const data = selectedMood ? moodData[selectedMood] : null;

  return (
    <div className="card4">
      <div className="card4h3">Relaxing Music</div>
      <div className="player">
        {data ? (
          <>
            <div className="playerheading">
              <h2>
                Top 5 Songs from Playlist{" "}
                {selectedMood ? `for ${selectedMood} Mood` : ""}
              </h2>
            </div>

            <ul className="song-list">
              {data.songs.map((song, index) => (
                <li
                  key={index}
                  className={`song-item ${currentSongIndex === index ? "active" : ""}`}
                  onClick={() => handleSongClick(index)}
                >
                  <span className="play-icon">
                    {currentSongIndex === index && isPlaying ? "⏸" : "▶"}
                  </span>
                  <span className="song-title">{song.title}</span>
                </li>
              ))}
            </ul>
            <audio
              ref={audioRef}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              style={{ display: "none" }}
            />

            <div className="playlist-button">
              <button onClick={() => openPlaylist(data.playlist)}>
                Open Spotify playlist
              </button>
            </div>
          </>
        ) : (
          <h2>Select a mood to get personalized music recommendations</h2>
        )}
      </div>
    </div>
  );
}

export default Music;
