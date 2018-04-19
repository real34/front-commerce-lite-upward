import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import Button from "theme/ui/atoms/Button";
import AddToCartMutation from "./AddToCartMutation.gql";

const AddToCart = ({ children, sku, onAdded }) => {
  return (
    <Mutation mutation={AddToCartMutation} onCompleted={onAdded}>
      {(addToCart, { loading }) => (
        <Button
          onClick={e => {
            e.preventDefault();
            addToCart({ variables: { sku } });
          }}
          status={loading ? "loading" : ""}
        >
          {children}
        </Button>
      )}
    </Mutation>
  );
};

AddToCart.propTypes = {
  children: PropTypes.node.isRequired,
  sku: PropTypes.string.isRequired,
  onAdded: PropTypes.func
};

export default AddToCart;
