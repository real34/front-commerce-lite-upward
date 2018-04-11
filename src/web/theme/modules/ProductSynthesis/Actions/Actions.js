import React from "react";
import AddToCart from "theme/ui/molecules/AddToCart";

const Actions = ({ product }) => {
  return (
    <div className="product-actions">
      <AddToCart sku={product.sku}>Add to cart</AddToCart>
    </div>
  );
};

export default Actions;
