import React from "react";
import { useWindowSize } from "react-use";
import styled from "styled-components";

const SpotifyFrame = styled.iframe`
  width: 100%;
  background: transparent;
  border: 0;
  overflow: hidden;
`;

const SpotifyEmbed = ({ title, source }) => {
  const size = useWindowSize();
  const big = size.width >= 450;

  const regex = /\/[\d\w]+[?]/gm;
  const found = source.match(regex);

  const fullSrc = `https://open.spotify.com/embed/track${found[0]}utm_source=generator`;

  return (
    <SpotifyFrame
      title={title}
      src={fullSrc}
      width="100%"
      height={big ? "80" : "300"}
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
};

export default SpotifyEmbed;
