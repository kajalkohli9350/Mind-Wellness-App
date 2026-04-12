const express = require("express");
const app = express();

// middleware
// app.use(express.json());
const Mood = require("../models/Mood");

// SAVE mood
app.post("/add", (req, res) => {
  const newMood = new Mood({
    mood: req.body.mood,
    time: new Date().toLocaleString(),
  });
 
  newMood.save();
  res.json({ message: "Mood saved" });
});

// GET all moods
app.get("/all", (req, res) => {
  Mood.find()
    .then((moods) => {
      res.json(moods);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// DELETE moods
app.delete("/clear", (req, res) => {
  Mood.deleteMany()
    .then(() => {
      res.json({ message: "History cleared" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = app;
