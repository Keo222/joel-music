import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";

// Icons
import instagramLogo from "../icons/instagram.svg";
import soundcloudLogo from "../icons/soundcloud.svg";

// Styled Elements
const SlideInItem = styled(animated.h3)`
  margin-left: 60%;
  color: ${(props) => props.theme.color.textLight};
  font-size: 2.4rem;
`;

const SocialsDiv = styled.div`
  position: absolute;
  bottom: 10vh;
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-around;
`;

const InstaIconDiv = styled.div`
  height: 3rem;
  width: 3rem;
`;
const SoundcloudIconDiv = styled.div`
  height: 5rem;
  width: 5rem;
`;

const Icon = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  &:hover {
    filter: brightness(0.7);
  }
`;

const Home = () => {
  const [showItem, setShowItem] = useState(false);
  // CHANGE THIS TO A CHAIN LATER
  const slideIn = useSpring({
    config: config.molasses,
    transform: showItem ? "translateX(0)" : "translateX(-100vw)",
  });
  useEffect(() => {
    setShowItem(true);
  }, []);

  return (
    <div>
      <title>Joel Gardella | Audio Engineer</title>
      <SlideInItem style={slideIn}>WEEEEE!!!</SlideInItem>
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
    </div>
  );
};

export default Home;
