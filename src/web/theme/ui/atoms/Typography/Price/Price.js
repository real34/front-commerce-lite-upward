import React from "react";
import PropTypes from "prop-types";

const Price = ({ price: { includeTax, value } }) => {
  return (
    <span className="price">
      {value.amount === null ? "N/A" : `${value.amount} ${value.currency}`}
    </span>
  );
};

Price.propTypes = {
  price: PropTypes.shape({
    includeTax: PropTypes.bool.isRequired,
    value: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    })
  })
};

export default Price;
