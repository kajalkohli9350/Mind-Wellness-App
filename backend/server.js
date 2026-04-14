// load environment variables
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(cors({
  origin: "*"
}));

// routes
const moodRoutes = require("./routes/moodRoutes");
app.use("/api/moods", moodRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Mental Wellness API Running");
});


// ✅ CONNECT TO MONGODB ATLAS (IMPORTANT)
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected ✅");
  
  app.listen(PORT, () => {
    console.log("Server running 🚀");
  });
})
.catch(err => console.log("DB Error ❌", err));


// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));