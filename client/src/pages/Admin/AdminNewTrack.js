import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Elements
const StyledForm = styled.form`
  color: ${(props) => props.theme.color.textLight};
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const Header = styled.h1`
  color: ${(props) => props.theme.color.textLight};
  text-align: center;
`;

const RadioDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SubmitButton = styled.button`
  color: ${(props) => props.theme.color.textDark};
  background: ${(props) => props.theme.color.highlight1};
  border: none;
  width: 20rem;
  font-weight: 600;
  font-size: 1.6rem;
  margin: 3rem auto;
  text-decoration: none;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover,
  &:active {
    filter: brightness(0.7);
  }
`;

const AdminTracks = () => {
  const [name, setName] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [work, setWork] = useState("");
  const [year, setYear] = useState("");
  const [about, setAbout] = useState("");
  const [genre, setGenre] = useState("");
  const [featured, setFeatured] = useState(false);
  const [spotify, setSpotify] = useState("");
  const [tidal, setTidal] = useState("");
  const [apple, setApple] = useState("");

  const navigate = useNavigate();

  const addTrack = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      artist: artist,
      work: work,
      year: year,
      about: about,
      genre: genre,
      featured: featured,
      spotify: spotify,
      tidal: tidal,
      apple: apple,
      album: album,
    };
    try {
      const res = await fetch("/api/tracks", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(res.status);
      navigate("/admin/tracks");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <title>JG Admin | New Track</title>
      <Header>Add Track</Header>
      <StyledForm onSubmit={(e) => addTrack(e)}>
        <label htmlFor="name">Track Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="album">Album:</label>
        <input
          type="text"
          name="album"
          id="album"
          onChange={(e) => setAlbum(e.target.value)}
        />

        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          name="artist"
          id="artist"
          onChange={(e) => setArtist(e.target.value)}
        />

        <label htmlFor="work">Type of Work:</label>
        <input
          type="text"
          name="work"
          id="work"
          onChange={(e) => setWork(e.target.value)}
        />

        <label htmlFor="year">Year:</label>
        <input
          type="number"
          min="1996"
          max="2099"
          step="1"
          name="year"
          id="year"
          onChange={(e) => setYear(e.target.value)}
        />

        <label htmlFor="about">About:</label>
        <textarea
          name="about"
          id="about"
          onChange={(e) => setAbout(e.target.value)}
        />

        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          name="genre"
          id="genre"
          onChange={(e) => setGenre(e.target.value)}
        />

        <RadioDiv>
          <p>Featured:</p>
          <input
            type="radio"
            id="featured"
            name="featured"
            value="yes"
            checked={featured === true}
            onChange={() => setFeatured(true)}
          />
          <label htmlFor="featured">Yes</label>

          <input
            type="radio"
            id="not-featured"
            name="featured"
            value="no"
            checked={featured === false}
            onChange={() => setFeatured(false)}
          />
          <label htmlFor="not-featured">No</label>
        </RadioDiv>

        <label htmlFor="spotify">Spotify Source:</label>
        <input
          type="text"
          name="spotify"
          id="spotify"
          onChange={(e) => setSpotify(e.target.value)}
        />

        <label htmlFor="tidal">Tidal Source:</label>
        <input
          type="text"
          name="tidal"
          id="tidal"
          onChange={(e) => setTidal(e.target.value)}
        />

        <label htmlFor="apple">Apple Music Source:</label>
        <input
          type="text"
          name="apple"
          id="apple"
          onChange={(e) => setApple(e.target.value)}
        />

        <SubmitButton type="submit">Add Track</SubmitButton>
      </StyledForm>
    </div>
  );
};

export default AdminTracks;
