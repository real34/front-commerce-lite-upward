import React from "react";
import PropTypes from "prop-types";
import "./Price.scss";

const Price = ({ price: { includeTax, value } }) => {
  const price =
    value.amount === null
      ? "N/A"
      : new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: value.currency
        }).format(value.amount);

  return <span className="price">{price}</span>;
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
