import React from "react";
import { useWindowSize } from "react-use";
import styled from "styled-components";

const AppleFrame = styled.iframe`
  width: 100%;
  overflow: hidden;
  background: transparent;
  border: 0;
`;

const AppleEmbed = ({ title, src }) => {
  const size = useWindowSize();
  const big = size.width >= 450;
  return (
    <AppleFrame
      title={title}
      allow="autoplay *; encrypted-media *; fullscreen *"
      frameborder="0"
      height={big ? "150" : "120"}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={src}
    />
  );
};

export default AppleEmbed;
