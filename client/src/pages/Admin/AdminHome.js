import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import AdminTrackInfo from "../../components/AdminTrackInfo";

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
      <title>JG Admin</title>
      <AdminHomeHeading>Admin Home</AdminHomeHeading>
      <AdminTrackInfo numTracks={numTracks} />
    </AdminHomeDiv>
  );
};

export default Admin;
