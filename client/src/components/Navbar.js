import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Image
import lightbulbWhite from "../images/lightbulb-white.png";
// Icon
import hamburger from "../icons/hamburger-white.svg";
import closeHamburger from "../icons/x-white.svg";

// Styled Elements
const SmallNav = styled.nav`
  display: none;
  height: 15rem;
  font-size: 1.6rem;
  font-weight: 500;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    display: flex;
  } ;
`;

const LargeNav = styled.nav`
  width: 90%;
  max-width: 150rem;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: 500;
  display: grid;
  grid-template-columns: 1fr 240px 1fr;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    display: none;
  } ;
`;

const SmallNavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 50rem;
  margin: 0 4rem;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    display: none;
  } ;
`;
const NavLinksLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 6rem;
`;
const NavLinksRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 6rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.textLight};

  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px ${(props) => props.theme.color.highlight1};
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
    border-radius: 20px;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

const LinkButton = styled(Link)`
  background: ${(props) => props.theme.color.highlight1};
  color: ${(props) => props.theme.color.textDark};
  font-weight: 600;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover,
  &:active {
    filter: brightness(0.7);
  }
`;

const SmallImageContainer = styled.div`
  width: 12rem;
  height: 15rem;
  margin: 0 2rem;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    width: 8rem;
    height: 10rem;
  }
`;

const LargeImageContainer = styled.div`
  width: 16rem;
  height: 20rem;
  margin: 0 4rem;
`;

const Logo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const HamburgerOpenIcon = styled.img`
  width: 6rem;
  height: 6rem;
  display: none;
  margin-top: 2.5rem;
  margin-right: 2rem;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    display: block;
  } ;
`;

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <>
      <SmallNav>
        <SmallImageContainer>
          <Logo src={lightbulbWhite} />
        </SmallImageContainer>
        <SmallNavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/listen">Listen</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          <StyledLink to="/pricing">Pricing</StyledLink>
          <LinkButton to="/hire">Hire</LinkButton>
        </SmallNavLinks>
        <HamburgerOpenIcon
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
          src={hamburgerOpen ? closeHamburger : hamburger}
          // src={hamburger}
        />
      </SmallNav>
      <LargeNav>
        <NavLinksLeft>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/listen">Listen</StyledLink>
        </NavLinksLeft>
        <LargeImageContainer>
          <Logo src={lightbulbWhite} />
        </LargeImageContainer>
        <NavLinksRight>
          <StyledLink to="/contact">Contact</StyledLink>
          <StyledLink to="/pricing">Pricing</StyledLink>
          <LinkButton to="/hire">Hire</LinkButton>
        </NavLinksRight>
      </LargeNav>
    </>
  );
};

export default Navbar;
