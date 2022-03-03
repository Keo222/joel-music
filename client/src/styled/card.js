import styled from "styled-components";

export const Card = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 40rem;
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
  height: 40rem;
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

export const CardFront = styled(CardSide)`
  background-image: linear-gradient(
    to bottom,
    #eee,
    ${({ color }) => handleColorType(color)} 50%,
    ${({ color }) => handleColorType(color)}
  );
`;

export const CardHeadingFront = styled.h4`
  color: ${(props) => props.theme.color.textDark};
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.8rem;
`;

export const CardHeadingBack = styled(CardHeadingFront)`
  color: ${(props) => props.theme.color.textLight};
`;

const handleColorType = (color) => {
  switch (color) {
    case "1":
      return "#57D2DB";
    case "2":
      return "#9381FF";
    case "3":
      return "FFAD05";
    default:
      return "#57D2DB";
  }
};

export const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  background-color: ${(props) => props.theme.color.textDark};
`;
