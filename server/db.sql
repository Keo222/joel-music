-- Create

CREATE SCHEMA website;

-- Music

CREATE TABLE tracks(
  track_id SERIAL PRIMARY KEY,
  track_name VARCHAR(100),
  track_artist VARCHAR(50),
  track_work VARCHAR(40),
  track_about VARCHAR(5000),
  track_year INTEGER,
  track_genre VARCHAR(50),
  track_featured BOOLEAN,
  track_spotify VARCHAR(120),
  track_apple VARCHAR(120),
  track_tidal VARCHAR(120),
)

CREATE TABLE site_text(
  site_about VARCHAR(15000),
  site_contact VARCHAR(10000),
  site_hire VARCHAR(10000),
)