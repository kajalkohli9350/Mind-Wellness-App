// load environment variables from .env file
require("dotenv").config();
// importing express framework
const express = require("express");

// importing mongoose to connect MongoDB
const mongoose = require("mongoose");

// cors allows frontend (React) to talk with backend
const cors = require("cors");

// create express app
const app = express();


// middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mind-wellness-app-z9yo.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);// allow cross origin requests
app.use(express.json()); // allow JSON data in requests


// connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mentalWellness")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

// import routes
const moodRoutes = require("./routes/moodRoutes");
app.use("/api/moods", moodRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Mental Wellness API Running");
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));