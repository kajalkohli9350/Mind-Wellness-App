import React from "react";

function Navbar() {
    const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <nav className="navbar">
     <ul>
        <div className="navbar2">
      <button onClick={() => scrollToSection("home")}>
        Home
      </button>

      <button onClick={() => scrollToSection("mood")}>
        Mood Tracker
      </button>

      <button onClick={() => scrollToSection("breathing")}>
        Breathing Exercise
      </button>

      <button onClick={() => scrollToSection("music")}>
        Relax Music
      </button>
    </div>
      </ul>
    </nav>
  );
}

export default Navbar;