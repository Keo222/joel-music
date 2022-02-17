import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Icons
import garbage from "../../icons/garbage-red.svg";
import edit from "../../icons/edit-yellow.svg";

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

const TrackHeading = styled.h1`
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

  @media screen and (${(props) => props.theme.responsive.md}) {
    margin: 0 4rem 4rem auto;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: 0 auto 8rem;
`;

const ColNum = styled.col`
  width: 7%;
`;
const ColName = styled.col`
  width: 18%;
`;
const ColAlbum = styled.col`
  width: 16%;
`;
const ColArtist = styled.col`
  width: 16%;
`;
const ColGenre = styled.col`
  width: 16%;
`;
const ColYear = styled.col`
  width: 15%;
`;
const ColEdit = styled.col`
  width: 6%;
`;
const ColDelete = styled.col`
  width: 6%;
`;

const TableRow = styled.tr`
  transition: all 0.2s;
  &:hover {
    background: #333;
  }
`;

const TableHeading = styled.th`
  text-align: left;
  font-size: 1.8rem;
  padding: 1rem;
  color: ${(props) => props.theme.color.highlight1};
`;
const TableIconHeading = styled.th`
  text-align: left;
  font-size: 1.2rem;
  padding: 1rem;
  color: ${(props) => props.theme.color.highlight1};
`;

const TableData = styled.td`
  padding: 1rem;
`;
const TableIcon = styled.td`
  padding: 1rem;
  align-items: center;
`;
const Icon = styled.img`
  height: 5rem;
  width: 3rem;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.6);
  }
`;

// Styled Elements

const Admin = () => {
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    async function getTracks() {
      const response = await fetch("/api/tracks");
      const allTracks = await response.json();
      setTracks(allTracks);
    }
    getTracks();
  }, []);
  return (
    <AdminHomeDiv>
      <TrackHeading>Tracks</TrackHeading>
      <NewTrackButton to="/admin/tracks/new">Add Track</NewTrackButton>
      <Table>
        <colgroup>
          <ColNum span="1" />
          <ColName span="1" />
          <ColAlbum span="1" />
          <ColArtist span="1" />
          <ColGenre span="1" />
          <ColYear span="1" />
          <ColEdit span="1" />
          <ColDelete span="1" />
        </colgroup>
        <thead>
          <TableRow>
            <TableHeading>#</TableHeading>
            <TableHeading>Track Name</TableHeading>
            <TableHeading>Album</TableHeading>
            <TableHeading>Artist</TableHeading>
            <TableHeading>Genre</TableHeading>
            <TableHeading>Year</TableHeading>
            <TableIconHeading>Edit</TableIconHeading>
            <TableIconHeading>Delete</TableIconHeading>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableData>1</TableData>
            <TableData>Song Title</TableData>
            <TableData>Album Title</TableData>
            <TableData>Musician Man</TableData>
            <TableData>Rock & Roll</TableData>
            <TableData>2018</TableData>
            <TableIcon>
              <Icon src={edit} alt="Edit Button" />
            </TableIcon>
            <TableIcon>
              <Icon src={garbage} alt="Delete Button" />
            </TableIcon>
          </TableRow>
          {tracks !== null &&
            tracks.map((t) => (
              <TableRow key={t.track_id}>
                <TableData>{t.track_id}</TableData>
                <TableData>{t.track_name}</TableData>
                <TableData>{t.track_album}</TableData>
                <TableData>{t.track_artist}</TableData>
                <TableData>{t.track_genre}</TableData>
                <TableData>{t.track_year}</TableData>
                <TableIcon>
                  <Icon src={edit} alt="Edit Button" />
                </TableIcon>
                <TableIcon>
                  <Icon src={garbage} alt="Delete Button" />
                </TableIcon>
              </TableRow>
            ))}
        </tbody>
      </Table>
    </AdminHomeDiv>
  );
};

export default Admin;
