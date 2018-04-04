import React from "react";
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

export default ProductView;
