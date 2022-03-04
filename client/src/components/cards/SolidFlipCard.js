import React from "react";

// Imported Styled Components
import {
  Card,
  SolidCardFront,
  SolidHeadingFront,
  SolidCardBack,
  CardHeadingBack,
} from "../../styled/card";

const SolidFlipCard = ({ color }) => {
  return (
    <Card>
      <SolidCardFront>
        <SolidHeadingFront color={color}>Card Front</SolidHeadingFront>
      </SolidCardFront>
      <SolidCardBack>
        <CardHeadingBack>Card Back</CardHeadingBack>
      </SolidCardBack>
    </Card>
  );
};

export default SolidFlipCard;
