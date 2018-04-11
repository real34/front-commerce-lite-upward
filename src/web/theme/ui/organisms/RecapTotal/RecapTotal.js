import React from "react";
import PropTypes from "prop-types";
import Price from "theme/ui/atoms/Typography/Price";
import "./RecapTotal.scss";

const RecapTotal = ({ title, price }) => {
  return (
    <div className="recap-total">
      <div className="recap-total__title">{title}</div>
      <div className="recap-total__price">
        <Price price={price} />
      </div>
    </div>
  );
};

RecapTotal.propTypes = {
  title: PropTypes.node.isRequired,
  price: Price.propTypes.price
};

export default RecapTotal;
