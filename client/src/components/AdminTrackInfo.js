import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Elements
const TrackInfoDiv = styled.div`
  background: ${(props) => props.theme.color.textDark};
  color: ${(props) => props.theme.color.textLight};
  width: 50%;
  border: 2px solid ${(props) => props.theme.color.highlight2};
  border-radius: 10px;
`;

const TrackInfoHeader = styled.h3`
  text-align: center;
  padding: 2rem 0;
  text-decoration: underline;
`;

const TrackNum = styled.p`
  text-align: center;
`;

const StyledLink = styled(Link)`
  background: ${(props) => props.theme.color.highlight1};
  color: ${(props) => props.theme.color.textDark};
  font-weight: 600;
  width: 8rem;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  transition: all 0.3s;
  margin: 3rem auto 1rem;
  display: block;
  &:hover,
  &:active {
    filter: brightness(0.7);
  }
`;

const AdminTrackInfo = ({ numTracks }) => {
  return (
    <TrackInfoDiv>
      <TrackInfoHeader>Tracks</TrackInfoHeader>
      <TrackNum>Number of tracks: {numTracks}</TrackNum>
      <StyledLink to="/admin/tracks">Edit Tracks</StyledLink>
    </TrackInfoDiv>
  );
};

export default AdminTrackInfo;
