import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
