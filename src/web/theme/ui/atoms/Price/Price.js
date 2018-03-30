import React from "react";
import PropTypes from "prop-types";
import invariant from "fbjs/lib/invariant";

export const currenciesWhitelist = ["EUR", "USD", "GBP"];

const Price = ({ price: { includeTax, value } }) => {
  invariant(
    currenciesWhitelist.indexOf(value.currency) > -1,
    `"${value.currency}" is not a whitelisted currency code`
  );

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
      currency: PropTypes.oneOf(currenciesWhitelist).isRequired
    })
  })
};

export default Price;
