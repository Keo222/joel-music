import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animated } from "react-spring";

// Components
import MusicSlider from "../components/musicPlayers/MusicSlider";

// Icons
import spotifyWhite from "../icons/spotify-white.png";
import spotifyColor from "../icons/spotify-green.png";
import tidalWhite from "../icons/tidal-white.png";
import tidalColor from "../icons/tidal-color.png";
import appleWhite from "../icons/apple-white.svg";
import appleColor from "../icons/apple-color.svg";

// Imported Styled Components
import { PageHeading } from "../styled/typography";

// Styled Components
const PageDiv = styled.div`
  margin-bottom: 10rem;
`;

const ContainerOfSelects = styled.div`
  display: flex;
  width: clamp(250px, 85%, 1400px);
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const SelectPlayerDiv = styled.div`
  margin: 2rem 0 5rem;
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

const WorkSelect = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  height: 9rem;
  width: 30%;
  background: ${(props) => props.theme.color.textDark};
  border-radius: 50px;
  overflow: hidden;
  & div:last-child:hover {
    background: ${(props) => props.theme.color.textLight};
  }
`;

const WorkTrio = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15%;
  outline: 1px solid ${(props) => props.theme.color.textDark};
  overflow: hidden;
  box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.4);
`;
const TrioItem = styled.div`
  display: flex;
  height: 6rem;
  align-items: center;
  justify-content: center;
  flex: 1;
  outline: 1px solid ${(props) => props.theme.color.textDark};
  filter: initial;
  transition: filter 0.15s;
  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;
const ProductionTrioItem = styled(TrioItem)`
  background: ${(props) => props.theme.color.highlight1};
`;
const MixingTrioItem = styled(TrioItem)`
  background: ${(props) => props.theme.color.highlight2};
`;
const MasteringTrioItem = styled(TrioItem)`
  background: ${(props) => props.theme.color.highlight3};
`;

const AllWorkSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.highlight1};
  height: 3rem;
  &:hover {
    cursor: pointer;
  }
`;

const GenreSelectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
`;

const GenreSelect = styled.select`
  height: fit-content;
`;

const Listen = () => {
  const [player, setPlayer] = useState(
    localStorage.getItem("player") || "Spotify"
  );
  const [tracks, setTracks] = useState(null);
  const [genres, setGenres] = useState(null);
  const [currentGenre, setCurrentGenre] = useState("All");
  const [work, setWork] = useState("All");

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
      <PageHeading>Listen</PageHeading>
      <ContainerOfSelects>
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
        <WorkSelect>
          <WorkTrio>
            <ProductionTrioItem>Production</ProductionTrioItem>
            <MixingTrioItem>Mixing</MixingTrioItem>
            <MasteringTrioItem>Mastering</MasteringTrioItem>
          </WorkTrio>
          <AllWorkSelect>All</AllWorkSelect>
        </WorkSelect>
        <GenreSelectDiv>
          <GenreSelect onChange={(e) => setCurrentGenre(e.target.value)}>
            <option>All</option>
            {genres !== null &&
              genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
          </GenreSelect>
        </GenreSelectDiv>
      </ContainerOfSelects>
      {genres !== null && (
        <MusicSlider
          tracks={tracks.filter((t) => t.track_featured)}
          player={player}
          genre="Featured"
        />
      )}
      {genres !== null &&
        genres
          .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
          .map((g) => (
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
