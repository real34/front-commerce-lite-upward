import React, { Component, Fragment } from "react";
import compose from "recompose/compose";
import withRouter from "react-router/withRouter";
import EnhanceCart from "./EnhanceCart";
import CartQuery from "./CartQuery.gql";
import CartItem from "./Item";
import {
  ModalHeader,
  ModalContent,
  ModalAction
} from "theme/ui/templates/Modal";
import Button from "theme/ui/atoms/Button";
import LoadingArea from "theme/ui/molecules/LoadingArea";
import Recap from "theme/ui/organisms/Recap";
import RecapTotal from "theme/ui/organisms/RecapTotal";

class Cart extends Component {
  constructor() {
    super();
    this.launchCheckout = this.launchCheckout.bind(this);
  }

  launchCheckout() {
    this.props.onRequestClose();
    this.props.history.push("/checkout");
  }

  render() {
    const { cart, loading } = this.props;

    if (loading) {
      return (
        <Fragment>
          <ModalHeader>My Cart</ModalHeader>
          <ModalContent>
            <LoadingArea>Loading…</LoadingArea>
          </ModalContent>
        </Fragment>
      );
    }

    const cartLength =
      cart && cart.items && cart.items.length ? cart.items.length : 0;

    return (
      <Fragment>
        <ModalHeader>
          My Cart
          {cartLength > 0
            ? cartLength === 1
              ? " - 1 item"
              : ` - ${cartLength} items`
            : null}
        </ModalHeader>
        <ModalContent>
          {cartLength > 0 ? (
            <Recap
              result={
                <RecapTotal
                  title="Subtotal"
                  price={cart.totals.subtotalInclTax}
                />
              }
            >
              {cart.items.map(item => (
                <CartItem
                  key={item.item_id}
                  price={item.priceInfo.rowTotalInclTax}
                  imageUrl={item.product.imageUrl}
                  name={item.name}
                  sku={item.sku}
                  qty={item.qty}
                  id={item.item_id}
                />
              ))}
            </Recap>
          ) : (
            <div>Your cart is empty.</div>
          )}
        </ModalContent>
        <ModalAction>
          <Button onClick={this.launchCheckout} type="full-size">
            Proceed to checkout
          </Button>
        </ModalAction>
      </Fragment>
    );
  }
}

export default compose(
  EnhanceCart(CartQuery),
  withRouter
)(Cart);
