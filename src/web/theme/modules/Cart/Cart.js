import React, { Component, Fragment } from "react";
import EnhanceCart from "./EnhanceCart";
import CartQuery from "./CartQuery.gql";
import CartItem from "./Item";
import {
  ModalHeader,
  ModalContent,
  ModalAction
} from "../../ui/templates/Modal";
import Button from "../../ui/atoms/Button";
import LoadingArea from "../../ui/molecules/LoadingArea";
import Recap from "../../ui/organisms/Recap";
import RecapTotal from "../../ui/organisms/RecapTotal";
import Link from "../../ui/atoms/Typography/Link";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      goToCheckout: false
    };
    this.launchCheckout = this.launchCheckout.bind(this);
  }

  launchCheckout() {
    this.setState({
      goToCheckout: true
    });
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

    let content = null;
    if (this.state.goToCheckout) {
      content = (
        <ModalContent>
          There is no Checkout in Front Commerce Lite.<br />
          However, feel free to take a look at{" "}
          <Link to="https://demo.front-commerce.com/" external>
            Front-Commerce's demo
          </Link>{" "}
          to see how it could look like.
        </ModalContent>
      );
    } else {
      content = (
        <Fragment>
          <ModalContent>
            {cartLength > 0 ? (
              <Recap
                total={
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

    return (
      <Fragment>
        <ModalHeader>
          My Cart
          {cartLength > 0
            ? cartLength === 1 ? " - 1 item" : ` - ${cart.items.length} items`
            : null}
        </ModalHeader>
        {content}
      </Fragment>
    );
  }
}

export default EnhanceCart(CartQuery)(Cart);
