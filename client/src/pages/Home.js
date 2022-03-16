import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import { Link } from "react-router-dom";

// Icons
import instagramLogo from "../icons/instagram.svg";
import fbLogo from "../icons/fb_logo_blue.svg";
import mail from "../icons/mail.svg";

// Images
import studioImg from "../images/studio1.jpg";

// Imported Styled Components
import { PageHeading } from "../styled/typography";
import { LinkButton } from "../styled/buttons";

// Styled Elements
const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 5rem auto 0;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    margin: 1rem auto 0;
  }
  @media screen and (${(props) => props.theme.responsive.sm}) {
    font-size: 4rem;
  }
  @media screen and (${(props) => props.theme.responsive.xs}) {
    font-size: 3rem;
  }
`;

const DescriptorDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: 85%;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    flex-direction: column;
  }
  @media screen and (${(props) => props.theme.responsive.xs}) {
    width: 80%;
  }
`;

const DescriptorLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.textLight};
  font-size: 2.4rem;
  font-weight: 200;
  margin-bottom: 1.5rem;
  transition: color 0.3s;
  grid-column: span ${(props) => (props.span ? props.span : 1)};

  &:hover {
    font-weight: 300;
    color: ${(props) => props.theme.color.highlight3};
  }
  @media screen and (${(props) => props.theme.responsive.md}) {
    font-size: 1.8rem;
  }
  @media screen and (${(props) => props.theme.responsive.xs}) {
    font-size: 1.3rem;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 15vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: start;
`;

const HomePgLinkButton = styled(LinkButton)`
  padding: 1.7rem 3.5rem;

  @media screen and (${(props) => props.theme.responsive.md}) {
    padding: 1.2rem 2.6rem;
  }

  @media screen and (${(props) => props.theme.responsive.xs}) {
    padding: 1rem 2rem;
  }
`;

const LogosDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 10vh;
`;

const SocialsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const IconDiv = styled.div`
  position: relative;
  cursor: pointer;
  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`;

const SocialIconDiv = styled(IconDiv)`
  height: 2.7rem;
  width: 2.7rem;
`;

const MailIconDiv = styled(IconDiv)`
  height: 3rem;
  width: 3rem;
`;

const Tooltip = styled.span`
  visibility: hidden;
  width: fit-content;
  background-color: ${(props) => props.theme.color.textDark};
  color: ${(props) => props.theme.color.textLight};
  padding: 5px;
  border: 1px solid #aaa;
  border-radius: 5px;

  /* Tooltip Text */
  white-space: nowrap;
  font-size: 1.2rem;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 30%;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.textLight} transparent
      transparent transparent;
  }
`;

const Icon = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: all 0.15s;
  filter: grayscale(20%) brightness(0.8);
  &:hover {
    filter: grayscale(0) brightness(1.3);
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
          <DescriptorLink to="/about">Audio Engineer</DescriptorLink>
          <DescriptorLink to="/">Production</DescriptorLink>
          <DescriptorLink to="/">Mixing & Mastering</DescriptorLink>
        </DescriptorDiv>
        <ButtonDiv>
          <HomePgLinkButton to="/listen" color={"1"}>
            Listen
          </HomePgLinkButton>
          <HomePgLinkButton to="/pricing" color={"1"}>
            Services
          </HomePgLinkButton>
        </ButtonDiv>
        <LogosDiv>
          <SocialsDiv>
            <SocialIconDiv>
              <Tooltip>Instagram</Tooltip>
              <a
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon src={instagramLogo} />
              </a>
            </SocialIconDiv>
            <SocialIconDiv>
              <Tooltip>Facebook</Tooltip>
              <a
                href="https://facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon src={fbLogo} />
              </a>
            </SocialIconDiv>
            <MailIconDiv>
              <Tooltip>Email Joel</Tooltip>
              <Link to="/contact">
                <Icon src={mail} />
              </Link>
            </MailIconDiv>
          </SocialsDiv>
        </LogosDiv>
      </HomeDiv>
    </>
  );
};

export default Home;
