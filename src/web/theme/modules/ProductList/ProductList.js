import React from "react";
import ProductItem from "../ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => <ProductItem key={product.sku} {...product} />)}
    </div>
  );
};

export default ProductList;
