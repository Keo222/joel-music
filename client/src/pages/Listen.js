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
import { girlfriend, allTracks, original, folk } from "../temp_db/json-tracks";

// Styled Elements
const PageDiv = styled.div`
  margin-bottom: 15rem;
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

  useEffect(() => {
    localStorage.setItem("player", player);
  }, [player]);

  const changePlayer = (newPlayer) => {
    setPlayer(newPlayer);
  };

  const featuredTracks = allTracks.filter((t) => t.featured);
  return (
    <PageDiv>
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
      <MusicSlider tracks={featuredTracks} player={player} genre="Featured" />
      <MusicSlider
        tracks={girlfriend}
        player={player}
        genre="Girlfriend Music"
      />
      <MusicSlider tracks={original} player={player} genre="Original Music" />
    </PageDiv>
  );
};

export default Listen;
