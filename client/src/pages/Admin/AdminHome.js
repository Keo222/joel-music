import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import AdminTrackInfo from "../../components/AdminTrackInfo";
import AdminGenreInfo from "../../components/AdminGenreInfo";
import AdminTextInfo from "../../components/AdminTextInfo";

// Styled Elements
const AdminHomeDiv = styled.div`
  color: ${(props) => props.theme.color.textLight};
  font-size: 1.4rem;
  width: 70%;
  margin: 0 auto 5rem;
  @media screen and (${(props) => props.theme.responsive.md}) {
    width: 90%;
  }
`;

const AdminHomeHeading = styled.h1`
  text-align: center;
  grid-column: span 2;
`;

const EditAdminDiv = styled.div`
  height: calc(100vh - 20rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4fr 4fr;
  gap: 2rem;
`;

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
    <>
      <title>JG Admin</title>
      <AdminHomeDiv>
        <EditAdminDiv>
          <AdminHomeHeading>Admin Home</AdminHomeHeading>
          <AdminGenreInfo />
          <AdminTextInfo />
          <AdminTrackInfo numTracks={numTracks} />
        </EditAdminDiv>
      </AdminHomeDiv>
    </>
  );
};

export default Admin;
