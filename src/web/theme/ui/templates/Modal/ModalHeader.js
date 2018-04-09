import React from "react";
import ModalContext from "./ModalContext";
import Button from "../../atoms/Button";

const ModalHeader = props => {
  return (
    <div className="modal__header">
      {props.children}
      <ModalContext.Consumer>
        {closeModal => <Button onClick={closeModal}>Close</Button>}
      </ModalContext.Consumer>
    </div>
  );
};

export default ModalHeader;
