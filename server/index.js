const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const pool = require("./db");

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

// Bring in API
// const apiRoutes = require("./api");
// app.use("/api", apiRoutes);

// GET ALL TRACKS --UNTESTED
app.get("/api/tracks", async (req, res) => {
  try {
    const allTracks = await pool.query("SELECT * FROM tracks");
    res.json(allTracks.rows);
  } catch (err) {
    console.error(err.message);
    res.send("Error getting single track", err);
  }
});

// GET SINGLE TRACK -- UNTESTED
app.get("/api/tracks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleTrack = await pool.query(
      "SELECT * FROM tracks WHERE track_id = $1",
      [id]
    );
    res.json(singleTrack.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.send("Error getting single track", err);
  }
});

// UPDATE TRACK --UNTESTED
app.put("/api/tracks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      artist,
      work,
      about,
      year,
      genre,
      featured,
      spotify,
      apple,
      tidal,
    } = req.body;
    await pool.query(
      "UPDATE tracks SET track_name=$1, track_artist=$2, track_work=$3, track_about=$4, track_year=$5, track_genre=$6, track_featured=$7, track_spotify=$8, track_apple=$9, track_tidal=$10 WHERE track_id=$11",
      [
        name,
        artist,
        work,
        about,
        year,
        genre,
        featured,
        spotify,
        apple,
        tidal,
        id,
      ]
    );
    res.send("Track Updated");
  } catch (err) {
    console.error(err.message);
    res.send("Error updating", err);
  }
});

// UPDATED ADD TRACK
app.post("/api/tracks", async (req, res) => {
  try {
    const {
      name,
      artist,
      work,
      about,
      year,
      genre,
      featured,
      spotify,
      apple,
      tidal,
      album,
    } = req.body;
    await pool.query(
      "INSERT INTO tracks (track_name, track_artist, track_work, track_about, track_year, track_genre, track_featured, track_spotify, track_apple, track_tidal, track_album) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
      [
        name,
        artist,
        work,
        about,
        year,
        genre,
        featured,
        spotify,
        apple,
        tidal,
        album,
      ]
    );
    res.send("New Track Added");
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Error adding new track: ${err}`);
  }
});

// DELETE TRACK -- UNTESTED
app.delete("/api/tracks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM tracks WHERE track_id = $1", [id]);
    res.send("Track Deleted");
  } catch (err) {
    console.error(err.message);
    res.send("Error adding new track", err);
  }
});
// TEST
app.post("/test", (req, res) => {
  try {
    console.log("test");
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
  res.end();
});

// Request pages from client
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Listen on PORT
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
