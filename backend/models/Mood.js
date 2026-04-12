const mongoose = require("mongoose");

// schema = blueprint of data
const moodSchema = new mongoose.Schema({
  mood: String,
  date: { type: Date, default: Date.now },
  time: String,
});

module.exports = mongoose.model("Mood", moodSchema);
