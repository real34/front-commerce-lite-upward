import React from "react";
import Price from "../../ui/atoms/Typography/Price";
import Sku from "../../ui/atoms/Typography/Sku";

const ProductItem = ({ path, name, prices, sku }) => {
  return (
    <div className="product-item">
      path: {path}
      name: {name}
      <Price price={prices.finalPrice.priceInclTax} />
      <Sku sku={sku} />
    </div>
  );
};

export default ProductItem;
