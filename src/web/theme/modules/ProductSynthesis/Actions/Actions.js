import React from "react";
import AddToCart from "theme/ui/molecules/AddToCart";
import { CartModal } from "../../Cart";

const Actions = ({ product }) => {
  return (
    <div className="product-actions">
      <CartModal>
        {openCart => (
          <AddToCart sku={product.sku} onAdded={openCart}>
            Add to cart
          </AddToCart>
        )}
      </CartModal>
    </div>
  );
};

export default Actions;
