import React, { useState } from "react";
import styled from "styled-components";

// Components
import MusicSlider from "../components/MusicSlider";

// Styled Elements
const StyledSelect = styled.select`
  border: none;
  border-radius: 5px;
  padding: 3px 4px;
  display: block;
  margin: 5rem 23% 0;

  &:focus {
    outline: none;
    box-shadow: 0px 2px 100px rgba(46, 224, 234, 0.6);
  }
`;

const Listen = () => {
  const [player, setPlayer] = useState("Spotify");
  const changePlayer = (newPlayer) => {
    setPlayer(newPlayer);
  };
  return (
    <div>
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
