import React from "react";
import styled from "styled-components";

const SpotifyFrame = styled.iframe`
  width: 100%;
  background: transparent;
  border: 0;
  overflow: hidden;
`;

const SpotifyEmbed = ({ title, src }) => {
  return (
    <SpotifyFrame
      title={title}
      src={src}
      width="100%"
      height="80"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
};

export default SpotifyEmbed;
