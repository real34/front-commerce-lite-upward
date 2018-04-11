import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import Button from "theme/ui/atoms/Button";
import AddToCartMutation from "./AddToCartMutation.gql";

const AddToCart = ({ children, sku }) => {
  return (
    <Mutation mutation={AddToCartMutation}>
      {addToCart => (
        <Button
          onClick={e => {
            e.preventDefault();
            addToCart({ variables: { sku } });
          }}
        >
          {children}
        </Button>
      )}
    </Mutation>
  );
};

AddToCart.propTypes = {
  children: PropTypes.node.isRequired,
  sku: PropTypes.string.isRequired
};

export default AddToCart;
