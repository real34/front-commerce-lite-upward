import React from "react";
import ReactModal from "react-modal";
import ModalContext from "./ModalContext";
import "./Modal.scss";

ReactModal.setAppElement("#app");

const Modal = props => {
  return (
    <ModalContext.Provider value={props.onRequestClose}>
      <ReactModal
        {...props}
        bodyOpenClassName="body--modal-opened"
        className="modal"
        overlayClassName="modal__overlay"
        closeTimeoutMS={200}
      />
    </ModalContext.Provider>
  );
};

Modal.propTypes = ReactModal.propTypes;

export default Modal;
