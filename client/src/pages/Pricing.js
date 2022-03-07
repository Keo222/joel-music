import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import FlipCard from "../components/cards/FlipCard";
import SolidFlipCard from "../components/cards/SolidFlipCard";

// Imported Styled Components
import { handleColorType } from "../styled/styleHelperFuncs";
import { PageHeading } from "../styled/typography";
import { LinkButton } from "../styled/buttons";

// Styled Components
const InfoTextDiv = styled.div`
  min-width: 200px;
  width: 60%;
  max-width: 700px;
  border: 2px solid ${(props) => props.theme.color.highlight2};
  border-radius: 10px;
  margin: 0 auto;
`;
const InfoText = styled.p`
  color: ${(props) => props.theme.color.textLight};
  padding: 0 1rem;
  font-size: 1.4rem;
`;

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.textLight};
  font-size: 2.4rem;
  font-weight: 200;
  letter-spacing: 0.5ch;
  margin-bottom: 1.5rem;
  text-decoration: underline 1px ${({ color }) => handleColorType(color)};
`;

const AllCardsDiv = styled.div`
  width: clamp(900px, 80%, 1200px);
  margin: 0 auto;
`;

const FlipCardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50rem;
  margin-bottom: 2rem;
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
  const [text, setText] = useState("");

  useEffect(() => {
    const getText = async () => {
      const fetch_url = "/api/text?name=pricing";
      try {
        const response = await fetch(fetch_url);
        const { stored_text } = await response.json();
        setText(stored_text);
      } catch (err) {
        console.error(err);
      }
    };
    getText();
  }, []);
  return (
    <>
      <title>Joel Gardella | Pricing</title>
      <PageHeading>Pricing</PageHeading>
      <InfoTextDiv>
        <InfoText>{text}</InfoText>
      </InfoTextDiv>

      <AllCardsDiv>
        <SectionTitle color={"1"}>Mixing</SectionTitle>
        <FlipCardDiv>
          <FlipCard color={"3"} numTracks={"1"} work={"Mix"} />
          <MiddleDiv>
            <BestDealText>Best Deal</BestDealText>
            <SolidFlipCard color={"1"} numTracks={"12"} work={"Mix"} />
          </MiddleDiv>
          <FlipCard color={"3"} numTracks={"5"} work={"Mix"} />
        </FlipCardDiv>

        <SectionTitle color={"2"}>Mastering</SectionTitle>
        <FlipCardDiv>
          <FlipCard color={"1"} numTracks={"1"} work={"Master"} />
          <MiddleDiv>
            <BestDealText>Best Deal</BestDealText>
            <SolidFlipCard color={"2"} numTracks={"12"} work={"Master"} />
          </MiddleDiv>
          <FlipCard color={"1"} numTracks={"5"} work={"Master"} />
        </FlipCardDiv>

        <SectionTitle color={"3"}>Mixing & Mastering</SectionTitle>
        <FlipCardDiv>
          <FlipCard color={"2"} numTracks={"1"} work={"MixMaster"} />
          <MiddleDiv>
            <BestDealText>Best Deal</BestDealText>
            <SolidFlipCard
              color={"3"}
              numTracks={"12"}
              work={"MixMaster"}
            />
          </MiddleDiv>
          <FlipCard color={"2"} numTracks={"5"} work={"MixMaster"} />
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
