import React from "react";
import { useWindowSize } from "react-use";
import styled from "styled-components";

const SpotifyFrame = styled.iframe`
  width: 100%;
  background: transparent;
  border: 0;
  overflow: hidden;
`;

const SpotifyEmbed = ({ title, src }) => {
  const size = useWindowSize();
  const big = size.width >= 450;

  return (
    <SpotifyFrame
      title={title}
      src={src}
      width="100%"
      height={big ? "80" : "300"}
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
};

export default SpotifyEmbed;
