import React, { useState } from "react";
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
  tracks,
  original,
  folk,
} from "../temp_db/json-tracks";

// Styled Elements
const PageDiv = styled.div`
  margin-bottom: 15rem;
`;

const SelectPlayerDiv = styled.div`
  margin: 2rem 8% 5rem;
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
  const [player, setPlayer] = useState("Spotify");

  const changePlayer = (newPlayer) => {
    setPlayer(newPlayer);
  };
  return (
    <PageDiv>
      <SelectPlayerDiv>
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
      </SelectPlayerDiv>
      {/* <StyledSelect
        name="player"
        id="player"
        onChange={(e) => changePlayer(e.target.value)}
        value={player}
      >
        <option value="Spotify">Spotify</option>
        <option value="Tidal">Tidal</option>
        <option value="Apple">Apple Music</option>
      </StyledSelect> */}
      <MusicSlider tracks={folk} player={player} genre="Folk" />
      <MusicSlider
        tracks={girlfriend}
        player={player}
        genre="Girlfriend Music"
      />
      <MusicSlider
        tracks={original}
        player={player}
        genre="Original Music"
      />
    </PageDiv>
  );
};

export default Listen;
