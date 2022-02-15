import React from "react";
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

const AdminTracks = () => {
  return (
    <div>
      <Header>Add Track</Header>
      <StyledForm>
        <label htmlFor="name">Track Name:</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="artist">Track Artist:</label>
        <input type="text" name="artist" id="artist" />

        <label htmlFor="year">Year:</label>
        <input
          type="number"
          min="1996"
          max="2099"
          step="1"
          name="year"
          id="year"
        />
        <label htmlFor="work">Type of Work:</label>
        <input type="text" name="work" id="work" />

        <label htmlFor="about">About:</label>
        <textarea name="about" id="about" />

        <label htmlFor="genre">Genre:</label>
        <input type="text" name="genre" id="genre" />

        <label htmlFor="featured">Featured:</label>
        <input type="checkbox" name="featured" id="featured" />

        <label htmlFor="spotify">Spotify Source:</label>
        <input type="text" name="spotify" id="spotify" />

        <label htmlFor="tidal">Tidal Source:</label>
        <input type="text" name="tidal" id="tidal" />

        <label htmlFor="apple">Apple Music Source:</label>
        <input type="text" name="apple" id="apple" />
      </StyledForm>
    </div>
  );
};

export default AdminTracks;
