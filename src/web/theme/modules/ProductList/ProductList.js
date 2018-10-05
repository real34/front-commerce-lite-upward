import React from "react";
import ProductItem from "../ProductItem";
import MediaGrid from "theme/ui/organisms/MediaGrid";

// We are using a specific JSX operator called the "spread" operator that will pass
// all properties of the given "product" object as props to the ProductItem component
// See : https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
const ProductList = ({ products }) => {
  return (
    <MediaGrid>
      {products.map(product => (
        <ProductItem key={product.sku} {...product} />
      ))}
    </MediaGrid>
  );
};

export default ProductList;
