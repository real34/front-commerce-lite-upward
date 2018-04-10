import React from "react";
import PropTypes from "prop-types";
import Price from "theme/ui/atoms/Typography/Price";
import { H1 } from "theme/ui/atoms/Typography/Heading";
import "./TitleWithPrice.scss";

const TitleWithPrice = ({ component = H1, children, price }) => {
  const Component = component;
  return (
    <div className="title-with-price">
      <Component>
        {children}
        <small>
          <Price price={price} />
        </small>
      </Component>
    </div>
  );
};

TitleWithPrice.propTypes = {
  children: PropTypes.node.isRequired,
  price: Price.propTypes.price,
  component: PropTypes.func
};

export default TitleWithPrice;
