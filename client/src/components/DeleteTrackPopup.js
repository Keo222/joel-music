import React from "react";
import styled from "styled-components";

// Styled Elements
const BlurredBackground = styled.div`
  z-index: 200;
  width: 100%;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;
const DeleteTrackModal = styled.div`
  width: 60%;
  height: 40rem;
  background: green;
`;

const DeleteTrackPopup = () => {
  return (
    <BlurredBackground>
      <DeleteTrackModal>DeleteTrackModal</DeleteTrackModal>
    </BlurredBackground>
  );
};

export default DeleteTrackPopup;
