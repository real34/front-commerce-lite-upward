import React from "react";
import PropTypes from "prop-types";
import HeadingWithAddon from "../../ui/molecules/HeadingWithAddon";
import Description from "./Description";
import Actions from "./Actions";
import Price from "../../ui/atoms/Typography/Price";

const ProductView = ({ product }) => (
  <div className="product-view">
    <HeadingWithAddon
      addon={<Price price={product.prices.finalPrice.priceInclTax} />}
    >
      {product.name}
    </HeadingWithAddon>
    <Actions product={product} />
    <Description>{product.description}</Description>
  </div>
);

ProductView.propTypes = {
  product: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prices: PropTypes.object.isRequired,
    description: PropTypes.string
  })
};
export default ProductView;
