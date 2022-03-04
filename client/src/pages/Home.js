import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import { Link } from "react-router-dom";

// Icons
import instagramLogo from "../icons/instagram.svg";
import soundcloudLogo from "../icons/soundcloud.svg";

// Images
import studioImg from "../images/studio1.jpg";

// Imported Styled Components
import { PageHeading } from "../styled/typography";
import { LinkButton } from "../styled/buttons";

// Styled Elements
const HomeDiv = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 4fr 1fr 1fr;
  min-height: calc(100vh - 15rem);
  @media screen and (${(props) => props.theme.responsive.xs}) {
    min-height: calc(100vh - 10rem);
    grid-template-rows: 1.8fr 2fr 1fr 1fr;
  }
`;

const WholeScreenDiv = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
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

const HomeHeader = styled(PageHeading)`
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    font-size: 4rem;
  }
  @media screen and (${(props) => props.theme.responsive.xs}) {
    font-size: 3rem;
    align-items: center;
  }
`;

const DescriptorDiv = styled.div`
  margin: 0 auto;
  width: 85%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media screen and (${(props) => props.theme.responsive.xs}) {
    width: 80%;
  }
`;

const DescriptorLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.textLight};
  font-size: 2.1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  transition: color 0.3s;
  margin: auto;
  grid-column: span ${(props) => (props.span ? props.span : 1)};

  &:hover {
    color: ${(props) => props.theme.color.highlight3};
  }
  @media screen and (${(props) => props.theme.responsive.xs}) {
    font-size: 1.3rem;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LogosDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SocialsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

const InstaIconDiv = styled.div`
  height: 2.7rem;
  width: 2.7rem;
`;
const SoundcloudIconDiv = styled.div`
  height: 4.3rem;
  width: 4.3rem;
`;

const Icon = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  filter: grayscale(20%);
  &:hover {
    filter: grayscale(0) brightness(1.5);
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
    <>
      <title>Joel Gardella | Audio Engineer</title>
      <WholeScreenDiv src={studioImg} />
      <HomeDiv>
        {/* <SlideInItem style={slideIn}>WEEEEE!!!</SlideInItem> */}
        <HomeHeader>Joel Gardella</HomeHeader>
        <DescriptorDiv>
          <DescriptorLink span="2" to="/">
            Production
          </DescriptorLink>
          <DescriptorLink to="/">Audio Engineer</DescriptorLink>
          <DescriptorLink to="/">Mixing & Mastering</DescriptorLink>
        </DescriptorDiv>
        <ButtonDiv>
          <LinkButton to="/listen" color={"2"}>
            Listen
          </LinkButton>
          <LinkButton to="/pricing" color={"2"}>
            Services
          </LinkButton>
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
    </>
  );
};

export default Home;
