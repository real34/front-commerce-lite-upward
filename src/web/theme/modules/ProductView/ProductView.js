import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import Description from "./Description";
import Actions from "./Actions";
import Price from "../../ui/atoms/Typography/Price";

const ProductView = ({ product }) => (
  <div className="product-view">
    <Title sku={product.sku}>{product.name}</Title>
    <Price price={product.prices.finalPrice.priceInclTax} />
    <Actions product={product} />
    <Description>{product.description}</Description>
  </div>
);

ProductView.propTypes = {
  product: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.shape({
      includeTax: PropTypes.bool.isRequired,
      value: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.oneOf(currenciesWhitelist).isRequired
      })
    }),
    description: PropTypes.string
  })
};
export default ProductView;
