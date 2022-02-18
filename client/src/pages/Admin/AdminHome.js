import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Elements
const AdminHomeDiv = styled.div`
  color: white;
  font-size: 1.4rem;
  width: 80%;
  margin: 2rem auto;
  @media screen and (${(props) => props.theme.responsive.md}) {
    width: 100%;
  }
`;

const AdminHomeHeading = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const NewTrackButton = styled(Link)`
  color: ${(props) => props.theme.color.textDark};
  background: ${(props) => props.theme.color.highlight1};
  display: block;
  width: 7.3rem;
  margin-left: auto;
  margin-bottom: 4rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover,
  &:active {
    filter: brightness(0.7);
  }
`;

// Styled Elements

const Admin = () => {
  const [numTracks, setNumTracks] = useState(0);

  async function getNumTracks() {
    const response = await fetch("/api/tracks");
    const allTracks = await response.json();
    setNumTracks(allTracks.length);
  }

  useEffect(() => {
    getNumTracks();
  }, []);
  return (
    <AdminHomeDiv>
      <AdminHomeHeading>HOME</AdminHomeHeading>
      <p>{numTracks}</p>
    </AdminHomeDiv>
  );
};

export default Admin;
