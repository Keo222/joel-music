import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Arrows
import leftArrow from "../../icons/left_arrow.svg";
import rightArrow from "../../icons/right_arrow.svg";
import upArrow from "../../icons/up_arrow.svg";
import downArrow from "../../icons/down_arrow.svg";

// Music Players
import AppleEmbed from "./AppleEmbed";
import SpotifyEmbed from "./SpotifyEmbed";
import TidalEmbed from "./TidalEmbed";

import {
  animated,
  useTransition,
  useSpringRef,
  useSpring,
  config,
} from "react-spring";

import { useMeasure } from "react-use";

// SLIDER ELEMENTS
const TopRow = styled.div`
  width: 70%;
  max-width: 110rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.responsive.md}) {
    width: 92%;
  }
`;
const TrackAndArrows = styled.div`
  width: 70%;
  max-width: 110rem;
  margin: 2rem auto 5rem;
  display: flex;
  align-items: center;
  @media screen and (${(props) => props.theme.responsive.md}) {
    width: 92%;
  }
`;

const LeftArrowSVG = styled.img`
  height: 3rem;
  margin-right: 2rem;
  cursor: pointer;
  user-select: none;
`;

const RightArrowSVG = styled.img`
  height: 3rem;
  margin-left: 2rem;
  cursor: pointer;
  user-select: none;
`;

const Bumper = styled.div`
  width: 50px;
`;

const TitleContainer = styled.div`
  width: 81rem;
  margin: 0 auto;
`;

const GenreTitle = styled.h3`
  font-size: 2rem;
  color: ${(props) => props.theme.color.textLight};
  margin-left: 3rem;
  width: 100%;
`;

// TRACK PLAYER ELEMENT
const TrackContainer = styled.div`
  margin: 0 auto;
  width: 81rem;
`;

const TrackDiv = styled(animated.div)`
  margin: 0 auto;
  width: 100%;
  background: #eee;
  border-radius: 5px;
  overflow: hidden;
`;

const EmbedDiv = styled.div`
  width: 100%;
`;

// Track info elements
const TrackInfoDiv = styled(animated.div)`
  width: 100%;
  margin: 0 auto;
  background: #eee;
`;

const BasicsDiv = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  text-align: center;
`;

const InfoPoint = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  flex-basis: 50%;
  margin: 2.2rem 0;
`;

const TrackInfoToggle = styled.div`
  width: 100%;
  font-size: 1.2rem;
  line-height: 2rem;
  text-align: center;
  cursor: pointer;
  user-select: none;
  align-items: center;
  background: ${(props) => (props.open ? "#ddd" : "#eee")};
`;

const ToggleArrowSVG = styled.img`
  height: 2.2rem;
  margin-left: 5px;
  vertical-align: bottom;
  user-select: none;
`;

const MusicSlider = ({ player, genre, tracks }) => {
  const [current, setCurrent] = useState(0);
  const length = tracks.length;

  // Choose which media player is embedded
  const playerSwitch = (track) => {
    switch (player) {
      case "Spotify":
        return (
          <SpotifyEmbed
            title={track.track_name}
            source={track.track_spotify}
            artist={track.track_artist}
          />
        );
      case "Apple":
        return (
          <AppleEmbed
            title={track.track_name}
            source={track.track_apple}
            artist={track.track_artist}
          />
        );
      case "Tidal":
        return (
          <TidalEmbed
            title={track.track_name}
            source={track.track_tidal}
            artist={track.track_artist}
          />
        );
      default:
        return (
          <SpotifyEmbed
            title={track.track_name}
            src={track.track_spotify}
            artist={track.track_artist}
          />
        );
    }
  };

  // ANIMATE SLIDER
  const transRef = useSpringRef();
  const transitions = useTransition(current, {
    ref: transRef,
    keys: current,
    from: {
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: {
      opacity: 0,
    },
    config: { duration: 600 },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    transRef.start();
  }, [current, transRef]);

  // ANIMATE INFO DIV
  const [showInfo, setShowInfo] = useState(false);
  const defaultHeight = "0px";
  const [contentHeight, setContentHeight] = useState(defaultHeight);
  const [heightRef, { height }] = useMeasure();

  // Info Div height toggle animation
  const expand = useSpring({
    config: config.gentle,
    height: showInfo ? `${contentHeight}px` : defaultHeight,
  });

  useEffect(() => {
    //Sets initial height
    setContentHeight(height);

    //Adds resize event listener
    window.addEventListener("resize", setContentHeight(height));

    // Clean-up
    return window.removeEventListener("resize", setContentHeight(height));
  }, [height]);

  // Move track functions
  const nextTrack = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevTrack = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // HTML Elements
  return (
    <>
      <TopRow>
        <Bumper>&nbsp;</Bumper>
        <TitleContainer>
          <GenreTitle>{genre}</GenreTitle>
        </TitleContainer>
        <Bumper>&nbsp;</Bumper>
      </TopRow>
      <TrackAndArrows>
        {tracks.length > 1 ? (
          <LeftArrowSVG src={leftArrow} onClick={() => prevTrack()} />
        ) : (
          <div>&nbsp;</div>
        )}
        {transitions((styles, i) => (
          <TrackContainer>
            <TrackDiv style={styles}>
              <EmbedDiv>{playerSwitch(tracks[i])}</EmbedDiv>

              <animated.div style={expand}>
                <TrackInfoDiv ref={heightRef}>
                  <BasicsDiv>
                    <InfoPoint>{tracks[current].track_work}</InfoPoint>
                    <InfoPoint>{tracks[current].track_year}</InfoPoint>
                  </BasicsDiv>
                </TrackInfoDiv>
              </animated.div>

              {showInfo ? (
                <TrackInfoToggle
                  open={showInfo}
                  onClick={() => setShowInfo(!showInfo)}
                >
                  See Less
                  <ToggleArrowSVG
                    src={upArrow}
                    alt="arrow down to open dropdown"
                  />
                </TrackInfoToggle>
              ) : (
                <TrackInfoToggle
                  open={showInfo}
                  onClick={() => setShowInfo(!showInfo)}
                >
                  See More
                  <ToggleArrowSVG
                    src={downArrow}
                    alt="arrow down to open dropdown"
                  />
                </TrackInfoToggle>
              )}
            </TrackDiv>
          </TrackContainer>
        ))}
        {tracks.length > 1 ? (
          <RightArrowSVG src={rightArrow} onClick={() => nextTrack()} />
        ) : (
          <div>&nbsp;</div>
        )}
      </TrackAndArrows>
    </>
  );
};

export default MusicSlider;
