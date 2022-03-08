import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Images
import aboutImgSrc from "../images/about_filler.jpg";

// Social Logos
import instagramLogo from "../icons/instagram.svg";
import soundcloudLogo from "../icons/soundcloud.svg";

// Imported Styled Components
import { PageHeading, FormattedParagraph } from "../styled/typography";

// Styled Components
const AboutImg = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -5;
  object-fit: cover;
  width: 40vw;
  height: 100vh;
  filter: brightness(0.5) grayscale(0.2);
  @media screen and (${(props) => props.theme.responsive.lg}) {
    width: 80vw;
    filter: brightness(0.25) grayscale(0.6);
  }
  @media screen and (${(props) => props.theme.responsive.sm}) {
    width: 100vw;
    filter: brightness(0.22) grayscale(0.3);
  }
`;

const ImgOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -4;
  width: 40vw;
  height: 100vh;
  background: linear-gradient(
      to right,
      rgba(16, 12, 11, 0),
      rgba(16, 12, 11, 0) 70%,
      rgba(16, 12, 11, 1)
    ),
    linear-gradient(
      to bottom right,
      rgba(16, 12, 11, 0),
      rgba(16, 12, 11, 0) 50%,
      rgba(16, 12, 11, 1)
    ),
    linear-gradient(
      to bottom,
      rgba(16, 12, 11, 0),
      rgba(16, 12, 11, 0) 70%,
      rgba(16, 12, 11, 1)
    ),
    linear-gradient(
      to bottom left,
      rgba(16, 12, 11, 0),
      rgba(16, 12, 11, 0) 70%,
      rgba(16, 12, 11, 1)
    ),
    linear-gradient(
      to left,
      rgba(16, 12, 11, 0),
      rgba(16, 12, 11, 0) 70%,
      rgba(16, 12, 11, 1)
    ),
    linear-gradient(
      to top left,
      rgba(16, 12, 11, 0),
      rgba(16, 12, 11, 0) 70%,
      rgba(16, 12, 11, 1)
    ),
    linear-gradient(
      to top,
      rgba(16, 12, 11, 0),
      rgba(16, 12, 11, 0) 70%,
      rgba(16, 12, 11, 1)
    ),
    linear-gradient(
      to top right,
      rgba(16, 12, 11, 0),
      rgba(16, 12, 11, 0) 70%,
      rgba(16, 12, 11, 1)
    );
  @media screen and (${(props) => props.theme.responsive.lg}) {
    width: 80vw;
  }
  @media screen and (${(props) => props.theme.responsive.sm}) {
    width: 100vw;
  }
`;

const AboutInfoContainer = styled.div`
  width: 60vw;
  margin-left: auto;
  margin-bottom: 5rem;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    width: 100vw;
  }
`;

const AboutInfoDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    width: 80vw;
  }
`;

const InlineSocialsDiv = styled.div`
  width: 30rem;
  height: 8rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    width: 20rem;
  }
`;

const InstaIconDiv = styled.div`
  height: 3rem;
  width: 3rem;
`;
const SoundcloudIconDiv = styled.div`
  height: 4.5rem;
  width: 4.5rem;
`;

const Icon = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  cursor: pointer;
  filter: grayscale(50%);
  &:hover {
    filter: unset;
  }
`;

const About = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    const getText = async () => {
      const fetch_url = "/api/text?name=about";
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
      <title>Joel Gardella | About</title>
      <ImgOverlay />
      <AboutImg src={aboutImgSrc} />
      <AboutInfoContainer>
        <AboutInfoDiv>
          <PageHeading>About</PageHeading>
          {text.map((p, i) => (
            <FormattedParagraph key={i}>{p}</FormattedParagraph>
          ))}
        </AboutInfoDiv>
        <InlineSocialsDiv>
          <InstaIconDiv>
            <Icon src={instagramLogo} />
          </InstaIconDiv>
          <SoundcloudIconDiv>
            <Icon src={soundcloudLogo} />
          </SoundcloudIconDiv>
        </InlineSocialsDiv>
      </AboutInfoContainer>
    </>
  );
};

export default About;
