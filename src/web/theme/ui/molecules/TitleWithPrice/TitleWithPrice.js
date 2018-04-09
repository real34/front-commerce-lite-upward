import React from "react";
import PropTypes from "prop-types";
import { H3 } from "../../atoms/Typography/Heading";
import Price from "../../atoms/Typography/Price";
import "./TitleWithPrice.scss";

const TitleWithPrice = ({ title, price, component = H3 }) => {
  const Component = component || H3;
  return (
    <Component>
      {title}
      <small className="title-with-price__price">
        <Price price={price} />
      </small>
    </Component>
  );
};

TitleWithPrice.propTypes = {
  title: PropTypes.number.isRequired,
  price: Price.propTypes.price,
  component: PropTypes.func
};

export default TitleWithPrice;
