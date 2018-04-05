import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import createMediaUrlFromPath from "../../../../utils/createMediaUrlFromPath";
import Price from "../../../ui/atoms/Typography/Price";
import RemoveCartItemMutation from "./RemoveCartItemMutation.gql";
import Button from "../../../ui/atoms/Button";

const CartItem = ({ imageUrl, name, qty, price, id, sku }) => {
  return (
    <Mutation mutation={RemoveCartItemMutation}>
      {removeFromCartMutation => (
        <div className="cart__item">
          <img src={createMediaUrlFromPath(imageUrl)} alt={name} />
          {`${name} ${qty} ${price}`}
          <Price price={price} />
          <Button
            onClick={e => {
              e.preventDefault();
              removeFromCartMutation({ variables: { item_id: id } });
            }}
          >
            Remove from cart
          </Button>
        </div>
      )}
    </Mutation>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  qty: PropTypes.number,
  price: Price.propTypes.price
};

export default CartItem;
