import React from "react";

// Imported Styled Components
import {
  Card,
  CardFront,
  CardHeadingFront,
  CardBack,
  CardHeadingBack,
} from "../styled/card";

const FlipCard = ({ color }) => {
  return (
    <Card>
      <CardFront color={color}>
        <CardHeadingFront>Card Front</CardHeadingFront>
      </CardFront>
      <CardBack>
        <CardHeadingBack>Card Back</CardHeadingBack>
      </CardBack>
    </Card>
  );
};

export default FlipCard;
