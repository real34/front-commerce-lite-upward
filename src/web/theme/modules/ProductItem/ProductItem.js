import React from "react";
import Price from "../../ui/atoms/Typography/Price";
import Sku from "../../ui/atoms/Typography/Sku";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";

const ProductItem = ({ path, name, prices, sku, imageUrl }) => {
  return (
    <div className="product-item">
      <img src={createMediaUrlFromPath(imageUrl)} alt={name} />
      path: {path}
      name: {name}
      <Price price={prices.finalPrice.priceInclTax} />
      <Sku sku={sku} />
    </div>
  );
};

export default ProductItem;
