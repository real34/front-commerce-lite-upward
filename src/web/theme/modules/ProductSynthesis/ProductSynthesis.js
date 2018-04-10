import React from "react";
import PropTypes from "prop-types";
import Description from "./Description";
import Actions from "./Actions";
import TitleWithPrice from "theme/ui/molecules/TitleWithPrice";
import "./ProductSynthesis.scss";

const ProductSynthesis = ({ product }) => (
  <div className="product-view">
    <div className="product-view__title">
      <TitleWithPrice price={product.prices.finalPrice.priceInclTax}>
        {product.name}
      </TitleWithPrice>
    </div>
    <Actions product={product} />
    <Description>{product.description}</Description>
  </div>
);

ProductSynthesis.propTypes = {
  product: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prices: PropTypes.object.isRequired,
    description: PropTypes.string
  })
};
export default ProductSynthesis;
