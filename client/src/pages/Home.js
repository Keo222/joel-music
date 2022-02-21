import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";

// Styled Elements
const SlideInItem = styled(animated.h3)`
  margin-left: 60%;
  color: ${(props) => props.theme.color.textLight};
  font-size: 2.4rem;
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
    </div>
  );
};

export default Home;
