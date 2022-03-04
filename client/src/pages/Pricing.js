import React from "react";
import styled from "styled-components";

// Components
import FlipCard from "../components/cards/FlipCard";
import SolidFlipCard from "../components/cards/SolidFlipCard";

// Imported Styled Components
import { PageHeading } from "../styled/typography";

// Styled Components
const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.textLight};
  font-size: 2rem;
`;

const FlipCardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50rem;
  margin-bottom: 5rem;
`;
const MiddleDiv = styled.div``;

const BestDealText = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  color: ${(props) => props.theme.color.highlight3};
  text-align: center;
`;

const Pricing = () => {
  return (
    <>
      <title>Joel Gardella | Pricing</title>
      <PageHeading>Pricing</PageHeading>

      <SectionTitle>Mixing</SectionTitle>
      <FlipCardDiv>
        <FlipCard color={"3"} />
        <MiddleDiv>
          <BestDealText>Best Deal</BestDealText>
          <SolidFlipCard color={"1"} align={"bottom"} />
        </MiddleDiv>
        <FlipCard color={"3"} align={"bottom"} />
      </FlipCardDiv>

      <SectionTitle>Mastering</SectionTitle>
      <FlipCardDiv>
        <FlipCard color={"1"} align={"bottom"} />
        <MiddleDiv>
          <BestDealText>Best Deal</BestDealText>
          <SolidFlipCard color={"2"} align={"bottom"} />
        </MiddleDiv>
        <FlipCard color={"1"} align={"bottom"} />
      </FlipCardDiv>
    </>
  );
};

export default Pricing;
