import React, { Fragment } from "react";
import EnhanceCart from "./EnhanceCart";
import CartQuery from "./CartQuery.gql";
import CartItem from "./Item";
import { ModalHeader, ModalContent } from "../../ui/templates/Modal";
import LoadingArea from "../../ui/molecules/LoadingArea";

const Cart = ({ cart, loading }) => {
  if (loading) {
    return <LoadingArea>Loading…</LoadingArea>;
  }

  const cartLength =
    cart && cart.items && cart.items.length ? cart.items.length : 0;

  return (
    <Fragment>
      <ModalHeader>
        My Cart
        {cartLength > 0
          ? cartLength === 1 ? " - 1 item" : ` - ${cart.items.length} items`
          : null}
      </ModalHeader>
      <ModalContent>
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
      </ModalContent>
    </Fragment>
  );
};

export default EnhanceCart(CartQuery)(Cart);
