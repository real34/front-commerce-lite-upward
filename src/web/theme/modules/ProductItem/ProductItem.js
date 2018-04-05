import React from "react";
import ProductPrice from "../../ui/molecules/ProductPrice";
import Sku from "../../ui/atoms/Typography/Sku";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";
import Link from "../../ui/atoms/Typography/Link";

const ProductItem = ({ name, prices, sku, imageUrl }) => {
  return (
    <div className="product-item">
      <Link to={`product/${sku}`}>
        <img src={createMediaUrlFromPath(imageUrl)} alt={name} />
        {name}
        <ProductPrice prices={prices} />
        <Sku sku={sku} />
      </Link>
    </div>
  );
};

export default ProductItem;
