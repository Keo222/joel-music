import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import { Link } from "react-router-dom";

// Icons
import instagramLogo from "../icons/instagram.svg";
import soundcloudLogo from "../icons/soundcloud.svg";

// Images
import studioImg from "../images/studio1.jpg";

// Styled Elements
const HomeDiv = styled.div``;

const WholeScreenDiv = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  object-fit: cover;
  z-index: -5;
  filter: brightness(0.4);
`;

const SlideInItem = styled(animated.h3)`
  margin-left: 60%;
  color: ${(props) => props.theme.color.textLight};
  font-size: 2.4rem;
`;

const HomeHeader = styled.h1`
  color: ${(props) => props.theme.color.highlight1};
  font-size: 5.5rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1rem;
  /* text-shadow: 2px 5px 7px rgba(255, 255, 255, 0.7); */
  @media screen and (${(props) => props.theme.responsive.xs}) {
    font-size: 4rem;
  }
`;

const DescriptorDiv = styled.div`
  margin: 0 auto;
  width: 70%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 12rem;
  align-items: center;
  @media screen and (${(props) => props.theme.responsive.xs}) {
    width: 80%;
  }
`;

const DescriptorLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.textLight};
  font-size: 2.6rem;
  margin-bottom: 1.5rem;
  transition: color 0.3s;
  margin: auto;
  grid-column: span ${(props) => (props.span ? props.span : 1)};

  &:hover {
    color: ${(props) => props.theme.color.highlight3};
  }
  @media screen and (${(props) => props.theme.responsive.xs}) {
    font-size: 2.2rem;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  max-width: 800px;
  height: 30vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (${(props) => props.theme.responsive.xs}) {
    height: 20vh;
  }
`;

const ButtonLink = styled(Link)`
  background: ${(props) => props.theme.color.highlight2};
  color: ${(props) => props.theme.color.textDark};
  font-weight: 500;
  font-size: 2rem;
  letter-spacing: 1px;
  text-decoration: none;
  padding: 1.5rem 2.2rem;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover,
  &:active {
    filter: brightness(0.7);
  }
  @media screen and (${(props) => props.theme.responsive.xs}) {
    font-size: 1.8rem;
    padding: 1.2rem 1.8rem;
  }
`;
const LogosDiv = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 6rem;
`;

const SocialsDiv = styled.div`
  width: 10%;
  min-width: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  margin-right: 5vw;
  @media screen and (${(props) => props.theme.responsive.xs}) {
    width: 100%;
    margin: 0;
  }
`;

const InstaIconDiv = styled.div`
  height: 2.5rem;
  width: 2.5rem;
`;
const SoundcloudIconDiv = styled.div`
  height: 4rem;
  width: 4rem;
`;

const Icon = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  filter: grayscale(50%);
  &:hover {
    filter: unset;
  }
`;

const Home = () => {
  // const [showItem, setShowItem] = useState(false);
  // // CHANGE THIS TO A CHAIN LATER
  // const slideIn = useSpring({
  //   config: config.molasses,
  //   delay: 200,
  //   transform: showItem ? "translateY(0)" : "translateY(5vw)",
  //   opacity: showItem ? "1" : "0",
  // });
  // useEffect(() => {
  //   setShowItem(true);
  // }, []);
  // Makes it so animation only happens on initial load
  // useEffect(() => {
  //   sessionStorage.setItem("showItem", showItem);
  // }, [showItem]);

  return (
    <HomeDiv>
      <title>Joel Gardella | Audio Engineer</title>
      <WholeScreenDiv src={studioImg} />
      {/* <SlideInItem style={slideIn}>WEEEEE!!!</SlideInItem> */}
      <HomeHeader>Joel Gardella:</HomeHeader>
      <DescriptorDiv>
        <DescriptorLink span="2" to="/">
          Production
        </DescriptorLink>
        <DescriptorLink to="/">Audio Engineer</DescriptorLink>
        <DescriptorLink to="/">Mixing & Mastering</DescriptorLink>
      </DescriptorDiv>
      <ButtonDiv>
        <ButtonLink to="/listen">Listen</ButtonLink>
        <ButtonLink to="/pricing">Services</ButtonLink>
      </ButtonDiv>
      <LogosDiv>
        <SocialsDiv>
          <SoundcloudIconDiv>
            <a
              href="https://soundcloud.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon src={soundcloudLogo} />
            </a>
          </SoundcloudIconDiv>
          <InstaIconDiv>
            <a
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon src={instagramLogo} />
            </a>
          </InstaIconDiv>
        </SocialsDiv>
      </LogosDiv>
    </HomeDiv>
  );
};

export default Home;
