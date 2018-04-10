import React from "react";
import ModalContext from "./ModalContext";
import IconButton from "../../atoms/Icon/IconButton";

const ModalHeader = props => {
  return (
    <div className="modal__header">
      {props.children}
      <ModalContext.Consumer>
        {closeModal => (
          <IconButton onClick={closeModal} icon="close">
            Close
          </IconButton>
        )}
      </ModalContext.Consumer>
    </div>
  );
};

export default ModalHeader;
