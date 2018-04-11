import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Modal from "../../ui/templates/Modal";
import Cart from "./Cart";

class CartModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      isOpened: true
    });
  }

  handleCloseModal() {
    this.setState({
      isOpened: false
    });
  }

  render() {
    return (
      <Fragment>
        {this.props.children(this.handleOpenModal)}
        <Modal
          isOpen={this.state.isOpened}
          onRequestClose={this.handleCloseModal}
          contentLabel="Cart"
        >
          <Cart onRequestClose={this.handleCloseModal} />
        </Modal>
      </Fragment>
    );
  }
}

CartModal.propTypes = {
  children: PropTypes.func.isRequired
};

export default CartModal;
