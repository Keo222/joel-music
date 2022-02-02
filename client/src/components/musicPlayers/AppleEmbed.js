import React from "react";
import styled from "styled-components";

const AppleFrame = styled.iframe`
  width: 100%;
  overflow: hidden;
  background: transparent;
  border: 0;
`;

const AppleEmbed = ({ title, src }) => {
  return (
    <AppleFrame
      title={title}
      allow="autoplay *; encrypted-media *; fullscreen *"
      frameborder="0"
      height="150"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={src}
    />
  );
};

export default AppleEmbed;
