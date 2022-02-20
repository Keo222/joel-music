import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Elements
const TrackInfoDiv = styled.div`
  background: ${(props) => props.theme.color.textLight};
  color: ${(props) => props.theme.color.textDark};
  width: 30%;
`;

const TrackInfoHeader = styled.h3`
  text-align: center;
  padding: 2rem 0;
  text-decoration: underline;
`;

const StyledLink = styled(Link)`
  background: ${(props) => props.theme.color.highlight1};
  color: inherit;
  font-weight: 600;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  transition: all 0.3s;
  margin: 1rem 0;
  text-align: center;
  display: inline-block;
  &:hover,
  &:active {
    filter: brightness(0.7);
  }
`;

const AdminTrackInfo = ({ numTracks }) => {
  return (
    <TrackInfoDiv>
      <TrackInfoHeader>Tracks</TrackInfoHeader>
      <p>Number of tracks: {numTracks}</p>
      <StyledLink to="/">Edit Tracks</StyledLink>
    </TrackInfoDiv>
  );
};

export default AdminTrackInfo;
