import React from "react";
import PropTypes from "prop-types";
import Price from "theme/ui/atoms/Typography/Price";
import { H1 } from "theme/ui/atoms/Typography/Heading";
import "./TitleWithPrice.scss";

const TitleWithPrice = ({ children, price }) => {
  return (
    <div className="title-with-price">
      <H1>
        {children}
        <small>
          <Price price={price} />
        </small>
      </H1>
    </div>
  );
};

TitleWithPrice.propTypes = {
  children: PropTypes.node.isRequired,
  price: Price.propTypes.price,
  component: PropTypes.func
};

export default TitleWithPrice;
