import React, { useState } from "react";
import styled from "styled-components";

// Components
import MusicSlider from "../components/MusicSlider";

// Icons
import spotifyWhite from "../icons/spotify-white.png";
import spotifyColor from "../icons/spotify-green.png";
import tidalWhite from "../icons/tidal-white.png";
import tidalColor from "../icons/tidal-color.png";
import appleWhite from "../icons/apple-white.svg";
import appleColor from "../icons/apple-color.svg";

// Styled Elements
const StyledSelect = styled.select`
  border: none;
  border-radius: 5px;
  padding: 3px 4px;
  display: block;
  margin: 5rem 23% 0;
  font-size: 1.4rem;

  &:focus {
    outline: none;
    box-shadow: 0px 2px 100px rgba(46, 224, 234, 0.6);
  }
`;

const SelectPlayerDiv = styled.div`
  margin: 5rem 20%;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-left: 3rem;
  cursor: pointer;
`;

const Listen = () => {
  const [player, setPlayer] = useState("Spotify");
  const changePlayer = (newPlayer) => {
    setPlayer(newPlayer);
  };
  return (
    <div>
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
      <StyledSelect
        name="player"
        id="player"
        onChange={(e) => changePlayer(e.target.value)}
        value={player}
      >
        <option value="Spotify">Spotify</option>
        <option value="Tidal">Tidal</option>
        <option value="Apple">Apple Music</option>
      </StyledSelect>
      <MusicSlider player={player} />
    </div>
  );
};

export default Listen;
