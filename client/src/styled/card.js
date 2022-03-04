import styled from "styled-components";

// Helper Functions
const handleColorType = (color) => {
  switch (color) {
    case "1":
      return "#57D2DB";
    case "2":
      return "#9381FF";
    case "3":
      return "#FFAD05";
    default:
      return "#57D2DB";
  }
};
const handleGlowType = (color) => {
  switch (color) {
    case "1":
      return "#57D2DB";
    case "2":
      return "#9381FF";
    case "3":
      return "#FFAD05";
    default:
      return "#57D2DB";
  }
};

// Styled Components
export const Card = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 30rem;
  width: 25rem;
  margin: 0 auto;

  &:hover div:nth-of-type(1) {
    transform: rotateY(-180deg);
  }
  &:hover div:nth-of-type(2) {
    transform: rotateY(0deg);
  }
`;

const CardSide = styled.div`
  font-size: 2rem;
  text-align: center;
  height: 30rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(255, 255, 255, 0.4);
  overflow: hidden;
`;

const SolidCardSide = styled(CardSide)`
  box-shadow: 0 0 10rem rgba(255, 255, 255, 0.4);
`;

export const ColoredCardFront = styled(CardSide)`
  background-image: linear-gradient(
    to bottom,
    #eee,
    ${({ color }) => handleColorType(color)} 50%,
    ${({ color }) => handleColorType(color)}
  );
`;

export const SolidCardFront = styled(SolidCardSide)`
  background: ${(props) => props.theme.color.textDark};
`;

const CardHeading = styled.h4`
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.8rem;
`;

export const ColoredHeadingFront = styled(CardHeading)`
  color: ${(props) => props.theme.color.textDark};
`;

export const SolidHeadingFront = styled(CardHeading)`
  color: ${({ color }) => handleColorType(color)};
  letter-spacing: unset;
`;

export const CardHeadingBack = styled(CardHeading)`
  color: ${(props) => props.theme.color.textLight};
  font-weight: 300;
`;

export const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  background-color: ${(props) => props.theme.color.textDark};
`;

export const SolidCardBack = styled(SolidCardSide)`
  transform: rotateY(180deg);
  background-color: ${(props) => props.theme.color.textDark};
`;
