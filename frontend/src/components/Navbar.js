import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "motivation", "mood", "breathing", "music"];

    const observers = sections.map((sectionId) => {
      const section = document.getElementById(sectionId);
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(section);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <button
            type="button"
            className={activeSection === "motivation" ? "active" : ""}
            onClick={() => scrollToSection("motivation")}
          >
            Motivation
          </button>
        </li>
        <li>
          <button
            type="button"
            className={activeSection === "mood" ? "active" : ""}
            onClick={() => scrollToSection("mood")}
          >
            Mood Tracker
          </button>
        </li>
        <li>
          <button
            type="button"
            className={activeSection === "breathing" ? "active" : ""}
            onClick={() => scrollToSection("breathing")}
          >
            Breathing Exercise
          </button>
        </li>
        <li>
          <button
            type="button"
            className={activeSection === "music" ? "active" : ""}
            onClick={() => scrollToSection("music")}
          >
            Relax Music
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
