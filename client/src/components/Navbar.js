import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Image
import lightbulbWhite from "../images/lightbulb-white.png";

// Styled Elements
const Nav = styled.nav`
  width: 80%;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const LinkButton = styled.div`
  background: ${(props) => props.theme.color.highlight1};
  color: ${(props) => props.theme.color.textDark};
  font-weight: 600;
  padding: 8px 2rem;
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  width: 16rem;
  height: 20rem;
`;

const Logo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/listen">Listen</StyledLink>
      <ImageContainer>
        <Logo src={lightbulbWhite} />
      </ImageContainer>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/pricing">Pricing</StyledLink>
      <LinkButton to="/hire">Hire</LinkButton>
    </Nav>
  );
};

export default Navbar;
