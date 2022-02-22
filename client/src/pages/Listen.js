import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animated } from "react-spring";

// Components
import MusicSlider from "../components/MusicSlider";

// Icons
import spotifyWhite from "../icons/spotify-white.png";
import spotifyColor from "../icons/spotify-green.png";
import tidalWhite from "../icons/tidal-white.png";
import tidalColor from "../icons/tidal-color.png";
import appleWhite from "../icons/apple-white.svg";
import appleColor from "../icons/apple-color.svg";

// Tracks
import {
  girlfriend,
  allTracks,
  original,
  folk,
} from "../temp_db/json-tracks";

// Styled Elements
const PageDiv = styled.div`
  margin-bottom: 10rem;
`;

const ListenHeader = styled.h1`
  text-align: center;
  font-size: 6rem;
  font-weight: 200;
  color: ${(props) => props.theme.color.highlight2};
  /* color: ${(props) => props.theme.color.textLight}; */
  letter-spacing: 1.6rem;
  margin: 2rem 0 5rem;
`;

const SelectPlayerDiv = styled.div`
  margin: 2rem 8% 5rem;
`;

const SelectPlayerLabel = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${(props) => props.theme.color.textLight};
`;

const SelectPlayerLogos = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: bottom;
`;

const Logo = styled(animated.img)`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-left: 3rem;
  cursor: pointer;
  user-select: none;
  filter: green;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

const Listen = () => {
  const [player, setPlayer] = useState(
    localStorage.getItem("player") || "Spotify"
  );
  const [tracks, setTracks] = useState(null);
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    localStorage.setItem("player", player);
  }, [player]);

  const changePlayer = (newPlayer) => {
    setPlayer(newPlayer);
  };

  async function getTracks() {
    const response = await fetch("/api/tracks/");
    const allTracks = await response.json();
    setTracks(allTracks);

    const genreSet = new Set();
    allTracks.map((t) => genreSet.add(t.track_genre));
    setGenres(Array.from(genreSet));
  }

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <PageDiv>
      <title>Joel Gardella | Listen</title>
      <ListenHeader>Listen</ListenHeader>
      <SelectPlayerDiv>
        <SelectPlayerLabel>Select Streaming Service:</SelectPlayerLabel>
        <SelectPlayerLogos>
          <Logo
            src={player === "Spotify" ? spotifyColor : spotifyWhite}
            alt="spotify logo unselected"
            onClick={() => changePlayer("Spotify")}
          />
          <Logo
            src={player === "Tidal" ? tidalColor : tidalWhite}
            alt="apple logo unselected"
            onClick={() => changePlayer("Tidal")}
          />
          <Logo
            src={player === "Apple" ? appleColor : appleWhite}
            alt="apple logo unselected"
            onClick={() => changePlayer("Apple")}
          />
        </SelectPlayerLogos>
      </SelectPlayerDiv>
      {/* <MusicSlider
        tracks={tracks.filter((t) => t.track_featured)}
        player={player}
        genre="Featured"
      /> */}
      {genres !== null &&
        genres.map((g) => (
          <MusicSlider
            key={g}
            tracks={tracks.filter((t) => t.track_genre === g)}
            player={player}
            genre={g}
          />
        ))}
    </PageDiv>
  );
};

export default Listen;
