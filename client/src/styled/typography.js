import styled from "styled-components";
import { handleColorType } from "./styleHelperFuncs";

export const PageHeading = styled.h1`
  text-align: center;
  font-size: 4.5rem;
  font-weight: 200;
  color: ${(props) => props.theme.color.highlight2};
  letter-spacing: 1.6rem;
  margin: 3vh 0;
`;

export const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.textLight};
  font-size: 2.4rem;
  font-weight: 200;
  letter-spacing: 0.5ch;
  margin-bottom: 1.5rem;
  text-decoration: underline 1px ${({ color }) => handleColorType(color)};
`;

export const BoldSpan = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.color.highlight3};
`;
