import React from "react";
import { CartModal } from "../../Cart";
import Button from "../../../ui/atoms/Button";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <CartModal>
            {openCart => (
              <Button type="invisible" onClick={openCart}>
                Cart
              </Button>
            )}
          </CartModal>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
