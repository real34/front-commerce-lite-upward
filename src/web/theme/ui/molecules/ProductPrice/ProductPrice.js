import React from "react";
import PropTypes from "prop-types";
import Price from "../../atoms/Typography/Price";

const ProductPrice = ({ prices, prefix }) => {
  if (!prices) {
    return null;
  }

  return (
    <div className="product-price">
      {prefix && <span className="product-price__prefix">{prefix}</span>}
      <Price price={prices.finalPrice.priceInclTax} />
    </div>
  );
};

ProductPrice.propTypes = {
  prices: PropTypes.shape({
    finalPrice: PropTypes.shape({
      priceInclTax: Price.propTypes.price,
      priceExclTax: Price.propTypes.price
    }).isRequired
  }).isRequired,
  prefix: PropTypes.string
};

export default ProductPrice;
