CREATE TABLE tracks (track_name VARCHAR(255), track_artist VARCHAR(255), track_album VARCHAR(255), track_work VARCHAR(255), track_about VARCHAR(5000), track_year INTEGER, track_genre VARCHAR(255), track_featured BOOLEAN, track_spotify VARCHAR(255), track_tidal VARCHAR(255), track_apple VARCHAR(255));


psql -h ec2-3-224-157-224.compute-1.amazonaws.com -U odnwzretyugglx d8l9slepvjfr1b

INSERT INTO tracks(track_name, track_artist, track_work, track_about, track_year, track_genre, track_featured, track_spotify, track_apple, track_tidal) VALUES ("Astronaut Man", "Eledy", "Mixed", "This is a very cool song!", "2020", "Pop", true, "https://open.spotify.com/embed/track/2eHp1gOry585glXT5iSxpf?utm_source=generator", "https://embed.music.apple.com/us/album/astronaut-man/1538034887?i=1538034888", "https://embed.tidal.com/tracks/160329063");