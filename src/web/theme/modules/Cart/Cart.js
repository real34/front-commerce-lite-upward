import React from "react";
import EnhanceCart from "./EnhanceCart";
import CartQuery from "./CartQuery.gql";
import CartItem from "./Item";
import LoadingArea from "../../ui/molecules/LoadingArea";

const Cart = ({ cart, loading }) => {
  if (loading) {
    return <LoadingArea>Loading…</LoadingArea>;
  }

  return (
    <div className="cart">
      {cart && cart.items && cart.items.length > 0 ? (
        cart.items.map(item => (
          <CartItem
            key={item.item_id}
            price={item.priceInfo.rowTotalInclTax}
            imageUrl={item.product.imageUrl}
            name={item.name}
            sku={item.sku}
            qty={item.qty}
            id={item.item_id}
          />
        ))
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
};

export default EnhanceCart(CartQuery)(Cart);
