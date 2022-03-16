import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Imported icons
import upArrow from "../../icons/up_arrow.svg";
import downArrow from "../../icons/down_arrow.svg";

// Imports for animations
import {
  animated,
  useTransition,
  useSpringRef,
  useSpring,
  config,
} from "react-spring";
import { useMeasure } from "react-use";

// Import track embeds
import SpotifyEmbed from "./SpotifyEmbed";
import TidalEmbed from "./TidalEmbed";
import AppleEmbed from "./AppleEmbed";

// Styled Componenets
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

const SinglePlayer = ({ track, player }) => {
  const [showInfo, setShowInfo] = useState(false);
  const defaultHeight = "0px";
  const [contentHeight, setContentHeight] = useState(defaultHeight);
  const [heightRef, { height }] = useMeasure();
  useEffect(() => {
    //Sets initial height
    setContentHeight(height);

    //Adds resize event listener
    window.addEventListener("resize", setContentHeight(height));

    // Clean-up
    return window.removeEventListener("resize", setContentHeight(height));
  }, [height]);
  const expand = useSpring({
    config: config.gentle,
    height: showInfo ? `${contentHeight}px` : defaultHeight,
  });

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
  return (
    <TrackContainer>
      <TrackDiv>
        <EmbedDiv>{playerSwitch(track)}</EmbedDiv>

        <animated.div style={expand}>
          <TrackInfoDiv ref={heightRef}>
            <BasicsDiv>
              <InfoPoint>{track.track_work}</InfoPoint>
              <InfoPoint>{track.track_year}</InfoPoint>
            </BasicsDiv>
          </TrackInfoDiv>
        </animated.div>

        {showInfo ? (
          <TrackInfoToggle
            open={showInfo}
            onClick={() => setShowInfo(!showInfo)}
          >
            Hide Track Info
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
            Track Info
            <ToggleArrowSVG
              src={downArrow}
              alt="arrow down to open dropdown"
            />
          </TrackInfoToggle>
        )}
      </TrackDiv>
    </TrackContainer>
  );
};

export default SinglePlayer;
