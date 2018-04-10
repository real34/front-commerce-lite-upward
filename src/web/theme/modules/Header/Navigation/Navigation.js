import React from "react";
import { CartModal } from "../../Cart";
import Button from "../../../ui/atoms/Button";
import IconWithLabel from "../../../ui/molecules/IconWithLabel";

const Navigation = () => {
  return (
    <nav>
      <CartModal>
        {openCart => (
          <Button type="invisible" onClick={openCart}>
            <IconWithLabel icon="cart">Cart</IconWithLabel>
          </Button>
        )}
      </CartModal>
    </nav>
  );
};

export default Navigation;
