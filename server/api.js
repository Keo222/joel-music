const express = require("express");
const pool = require("./db");

const router = express.Router();

// GET ALL TRACKS --UNTESTED
router.get("/tracks", async (req, res) => {
  try {
    const allTracks = await pool.query("SELECT * FROM tracks");
    res.json(allTracks.rows);
  } catch (err) {
    console.error(err.message);
    res.send("Error getting single track");
  }
});

// GET SINGLE TRACK -- UNTESTED
router.get("/tracks/:id", async (req, res) => {
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
router.put("/tracks/:id", async (req, res) => {
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

// NEW TRACK -- UNTESTED
router.post("/tracks", async (req, res) => {
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
    } = req.body;
    await pool.query(
      "INSERT INTO tracks (track_name, track_artist, track_work, track_about, track_year, track_genre, track_featured, track_spotify, track_apple, track_tidal) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
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
      ]
    );
    res.json("New Track Added");
  } catch (err) {
    console.error(err.message);
    res.send("Error adding new track", err);
  }
});
// DELETE TRACK -- UNTESTED
router.delete("/tracks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM tracks WHERE track_id = $1", [id]);
    res.json("Track Deleted");
  } catch (err) {
    console.error(err.message);
  }
});

// TEXT API ******************************************

router.get("/text", async (req, res) => {
  const allText = await pool.query("SELECT");
});

module.exports = router;
