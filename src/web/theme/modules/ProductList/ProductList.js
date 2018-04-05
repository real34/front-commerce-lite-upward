import React from "react";
import ProductItem from "../ProductItem";

// We are using a specific JSX operator called the "spread" operator that will pass
// all properties of the given "product" object as props to the ProductItem component
// See : https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => <ProductItem key={product.sku} {...product} />)}
    </div>
  );
};

export default ProductList;
