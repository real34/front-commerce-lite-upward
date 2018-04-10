import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import createMediaUrlFromPath from "../../../../utils/createMediaUrlFromPath";
import Price from "../../../ui/atoms/Typography/Price";
import RemoveCartItemMutation from "./RemoveCartItemMutation.gql";
import Button from "../../../ui/atoms/Button";
import Icon from "../../../ui/atoms/Icon";
import RecapLineWithImage from "../../../ui/organisms/RecapLineWithImage";

const CartItem = ({ imageUrl, name, qty, price, id, sku }) => {
  return (
    <Mutation mutation={RemoveCartItemMutation}>
      {removeFromCartMutation => (
        <RecapLineWithImage
          image={<img src={createMediaUrlFromPath(imageUrl)} alt={name} />}
          actions={
            <Button
              type="invisible"
              onClick={e => {
                e.preventDefault();
                removeFromCartMutation({ variables: { item_id: id } });
              }}
            >
              <Icon icon="trash" /> Remove
            </Button>
          }
          title={`${qty} × ${name}`}
          price={price}
        />
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
