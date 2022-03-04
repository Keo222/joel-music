import React from "react";
import styled from "styled-components";

// Components
import FlipCard from "../components/cards/FlipCard";
import SolidFlipCard from "../components/cards/SolidFlipCard";

// Imported Styled Components
import { PageHeading } from "../styled/typography";
import { LinkButton } from "../styled/buttons";

// Styled Components
const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.textLight};
  font-size: 2rem;
  font-weight: 400;
`;

const AllCardsDiv = styled.div`
  width: clamp(900px, 80%, 1200px);
  margin: 0 auto;
`;

const FlipCardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50rem;
  margin-bottom: 3rem;
`;
const MiddleDiv = styled.div``;

const BestDealText = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  margin: 1rem 0 3rem;
  color: ${(props) => props.theme.color.highlight3};
  text-align: center;
`;

const CenteringDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 8rem;
`;

const Pricing = () => {
  return (
    <>
      <title>Joel Gardella | Pricing</title>
      <PageHeading>Pricing</PageHeading>

      <AllCardsDiv>
        <SectionTitle>Mixing</SectionTitle>
        <FlipCardDiv>
          <FlipCard color={"3"} numTracks={"1"} />
          <MiddleDiv>
            <BestDealText>Best Deal</BestDealText>
            <SolidFlipCard color={"1"} numTracks={"12"} />
          </MiddleDiv>
          <FlipCard color={"3"} numTracks={"5"} />
        </FlipCardDiv>

        <SectionTitle>Mastering</SectionTitle>
        <FlipCardDiv>
          <FlipCard color={"1"} numTracks={"1"} />
          <MiddleDiv>
            <BestDealText>Best Deal</BestDealText>
            <SolidFlipCard color={"2"} numTracks={"12"} />
          </MiddleDiv>
          <FlipCard color={"1"} numTracks={"5"} />
        </FlipCardDiv>

        <SectionTitle>Mixing & Mastering</SectionTitle>
        <FlipCardDiv>
          <FlipCard color={"2"} numTracks={"1"} />
          <MiddleDiv>
            <BestDealText>Best Deal</BestDealText>
            <SolidFlipCard color={"3"} numTracks={"12"} />
          </MiddleDiv>
          <FlipCard color={"2"} numTracks={"5"} />
        </FlipCardDiv>
      </AllCardsDiv>
      <CenteringDiv>
        <LinkButton to="/hire" color={"3"}>
          Book Services
        </LinkButton>
      </CenteringDiv>
    </>
  );
};

export default Pricing;
