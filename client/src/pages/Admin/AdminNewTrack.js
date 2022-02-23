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

const InputGroup = styled.div`
  /* display: flex; */
  width: 60%;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const InputLabel = styled.label`
  margin-right: 2rem;
`;

const TextAreaLabel = styled.label``;

const ShortTextInput = styled.input`
  /* flex: 1; */
  width: 100%;
`;

const TextAreaInput = styled.textarea`
  width: 100%;
  height: 15rem;
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
        <InputGroup>
          <InputLabel htmlFor="name">Track Name:</InputLabel>
          <ShortTextInput
            type="text"
            name="name"
            id="name"
            placeholder='ex: "Bohemian Rhapsody"'
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="album">Album:</InputLabel>
          <ShortTextInput
            type="text"
            name="album"
            id="album"
            placeholder='ex: "A Night at the Opera"'
            onChange={(e) => setAlbum(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="artist">Artist:</InputLabel>
          <ShortTextInput
            type="text"
            name="artist"
            id="artist"
            placeholder='ex: "Queen"'
            onChange={(e) => setArtist(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="year">Year:</InputLabel>
          <ShortTextInput
            type="number"
            min="1996"
            max="2099"
            step="1"
            name="year"
            id="year"
            onChange={(e) => setYear(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="genre">Genre:</InputLabel>
          <select
            type="text"
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="Pop">Pop</option>
            <option value="Folk">Folk</option>
            <option value="Rock">Rock</option>
            <option value="???">???</option>
            <option value="Original Music">Original Music</option>
          </select>
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="work">Type of Work:</InputLabel>
          <select
            type="text"
            name="work"
            id="work"
            onChange={(e) => setWork(e.target.value)}
          >
            <option value="Mixed">Mixed</option>
            <option value="Mastered">Mastered</option>
            <option value="Mixed & Mastered">Mixed & Mastered</option>
          </select>
        </InputGroup>
        <InputGroup>
          <TextAreaLabel htmlFor="about">About:</TextAreaLabel>
          <TextAreaInput
            name="about"
            id="about"
            placeholder="About this track..."
            onChange={(e) => setAbout(e.target.value)}
          />
        </InputGroup>

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

        <InputLabel htmlFor="spotify">Spotify Source:</InputLabel>
        <input
          type="text"
          name="spotify"
          id="spotify"
          onChange={(e) => setSpotify(e.target.value)}
        />

        <InputLabel htmlFor="tidal">Tidal Source:</InputLabel>
        <input
          type="text"
          name="tidal"
          id="tidal"
          onChange={(e) => setTidal(e.target.value)}
        />

        <InputLabel htmlFor="apple">Apple Music Source:</InputLabel>
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
