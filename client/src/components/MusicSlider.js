import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Arrows
import leftArrow from "../icons/left_arrow.svg";
import rightArrow from "../icons/right_arrow.svg";
import upArrow from "../icons/up_arrow.svg";
import downArrow from "../icons/down_arrow.svg";

// Music Players
import AppleEmbed from "./musicPlayers/AppleEmbed";
import SpotifyEmbed from "./musicPlayers/SpotifyEmbed";
import TidalEmbed from "./musicPlayers/TidalEmbed";

import {
  animated,
  useTransition,
  useSpringRef,
  useSpring,
  config,
} from "react-spring";

import { useMeasure } from "react-use";

const tracks = [
  {
    title: "Astronaut Man",
    artist: "Eledy",
    work: "Mixed",
    year: "2019",
    spotifySrc:
      "https://open.spotify.com/embed/track/2eHp1gOry585glXT5iSxpf?utm_source=generator",
    appleSrc:
      "https://embed.music.apple.com/us/album/astronaut-man/1538034887?i=1538034888",
    tidalSrc: "https://embed.tidal.com/tracks/160329063",
  },
  {
    title: "Mole Hills",
    artist: "Crete",
    work: "Mixed & Mastered",
    year: "2018",
    spotifySrc:
      "https://open.spotify.com/embed/track/7lQnbTONZ0DiIZwR6OzpFl?utm_source=generator",
    appleSrc:
      "https://embed.music.apple.com/us/album/mole-hills/1390203695?i=1390203974",
    tidalSrc: "https://embed.tidal.com/tracks/89429697",
  },
  {
    title: "You Feel Far",
    artist: "Novel Mover",
    work: "Original Music",
    year: "2021",
    spotifySrc:
      "https://open.spotify.com/embed/track/7w4s3kyQmTUvfaWDJrTbfp?utm_source=generator",
    appleSrc:
      "https://embed.music.apple.com/us/album/you-feel-far/1593246124?i=1593246125",
    tidalSrc: "https://embed.tidal.com/tracks/203547808",
  },
];

// SLIDER ELEMENTS
const TrackAndArrows = styled.div`
  width: 70%;
  margin: 5rem auto;
  display: flex;
  align-items: center;
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

const TrackAndTitle = styled.div``;

const GenreTitle = styled.h3`
  font-size: 2rem;
  color: ${(props) => props.theme.color.textLight};
`;

// TRACK PLAYER ELEMENT
const TrackContainer = styled.div`
  margin: 0 auto;
  min-width: 600px;
  width: 81rem;
`;

const TrackDiv = styled(animated.div)`
  margin: 0 auto;
  min-width: 600px;
  width: 100%;
  background: #eee;
  border-radius: 5px;
  overflow: hidden;
`;

const EmbedDiv = styled.div`
  width: 100%;
  min-width: 340px;
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

const MusicSlider = ({ player, genre }) => {
  const [current, setCurrent] = useState(0);
  const length = tracks.length;

  // Choose which media player is embedded
  const playerSwitch = (track) => {
    switch (player) {
      case "Spotify":
        return (
          <SpotifyEmbed
            title={track.title}
            src={track.spotifySrc}
            artist={track.artist}
          />
        );
      case "Apple":
        return (
          <AppleEmbed
            title={track.title}
            src={track.appleSrc}
            artist={track.artist}
          />
        );
      case "Tidal":
        return (
          <TidalEmbed
            title={track.title}
            src={track.tidalSrc}
            artist={track.artist}
          />
        );
      default:
        return (
          <SpotifyEmbed
            title={track.title}
            src={track.spotifySrc}
            artist={track.artist}
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
    <TrackAndArrows>
      <LeftArrowSVG src={leftArrow} onClick={() => prevTrack()} />
      <TrackAndTitle>
        <GenreTitle>{genre}</GenreTitle>
        {transitions((styles, i) => (
          <TrackContainer>
            <TrackDiv style={styles}>
              <EmbedDiv>{playerSwitch(tracks[i])}</EmbedDiv>

              <animated.div style={expand}>
                <TrackInfoDiv ref={heightRef}>
                  <BasicsDiv>
                    <InfoPoint>{tracks[current].work}</InfoPoint>
                    <InfoPoint>{tracks[current].year}</InfoPoint>
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
      </TrackAndTitle>
      <RightArrowSVG src={rightArrow} onClick={() => nextTrack()} />
    </TrackAndArrows>
  );
};

export default MusicSlider;
