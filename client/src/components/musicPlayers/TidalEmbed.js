import React from "react";
import styled from "styled-components";

const TidalFrame = styled.iframe`
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  border: 0;
`;

const TidalEmbed = ({ title, src }) => {
  return (
    <TidalFrame
      title={title}
      artist="Eledy"
      src={src}
      allowfullscreen
      allow="encrypted-media;"
    />
  );
};

export default TidalEmbed;
