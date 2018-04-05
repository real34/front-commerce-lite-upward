import React from "react";
import { Mutation } from "react-apollo";
import Button from "../../atoms/Button";
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

export default AddToCart;
