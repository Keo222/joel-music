import React from "react";

// Imported Styled Components
import {
  Card,
  SolidCardFront,
  SolidHeadingFront,
  SolidCardBack,
  CardHeadingBack,
  CardBackBody,
  CardLinkButton,
} from "../../styled/card";
const SolidFlipCard = ({ color, numTracks }) => {
  return (
    <Card>
      <SolidCardFront color={color}>
        <SolidHeadingFront color={color}>
          {numTracks} Tracks
        </SolidHeadingFront>
      </SolidCardFront>
      <SolidCardBack color={color}>
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
      </SolidCardBack>
    </Card>
  );
};

export default SolidFlipCard;
