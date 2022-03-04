import React from "react";

// Imported Styled Components
import {
  Card,
  ColoredCardFront,
  ColoredHeadingFront,
  CardBack,
  CardHeadingBack,
} from "../../styled/card";

const FlipCard = ({ color }) => {
  return (
    <Card>
      <ColoredCardFront color={color}>
        <ColoredHeadingFront>Card Front</ColoredHeadingFront>
      </ColoredCardFront>
      <CardBack>
        <CardHeadingBack>Card Back</CardHeadingBack>
      </CardBack>
    </Card>
  );
};

export default FlipCard;
