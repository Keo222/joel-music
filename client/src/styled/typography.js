import styled from "styled-components";

export const PageHeading = styled.h1`
  text-align: center;
  font-size: 4.5rem;
  font-weight: 200;
  color: ${(props) => props.theme.color.highlight2};
  letter-spacing: 1.6rem;
  margin: 3vh 0;
`;

export const BoldSpan = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.color.highlight3};
`;
