import React from "react";

// Imported Styled Components
import {
  Card,
  ColoredCardFront,
  ColoredHeadingFront,
  CardBack,
  CardHeadingBack,
  CardBackBody,
  CardLinkButton,
} from "../../styled/card";

const FlipCard = ({ color, numTracks }) => {
  const trackOrTracks = numTracks === "1" ? "Track" : "Tracks";
  return (
    <Card>
      <ColoredCardFront color={color}>
        <ColoredHeadingFront>
          {numTracks} {trackOrTracks}
        </ColoredHeadingFront>
      </ColoredCardFront>
      <CardBack>
        <CardHeadingBack>Card Back</CardHeadingBack>
        <CardBackBody color={color}>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
          <li>Six</li>
          <li>Seven</li>
          <li>Eight</li>
          <li>Nine</li>
          <li>Ten</li>
          <li>Eleven</li>
          <li>Twelve</li>
          <li>Thirteen</li>
          <li>Fourteen</li>
          <li>Fifteen</li>
        </CardBackBody>
        <CardLinkButton to="/hire" color={color}>
          Inquire
        </CardLinkButton>
      </CardBack>
    </Card>
  );
};

export default FlipCard;
