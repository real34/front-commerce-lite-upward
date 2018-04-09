import React from "react";
import Price from "theme/ui/atoms/Typography/Price";
import { H1 } from "theme/ui/atoms/Typography/Heading";
import "./TitleWithPrice.scss";

const TitleWithPrice = ({ children, price }) => {
  return (
    <div className="title-with-price">
      <H1>{children}</H1>
      <small>
        <Price price={price} />
      </small>
    </div>
  );
};

export default TitleWithPrice;
