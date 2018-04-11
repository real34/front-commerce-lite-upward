import React from "react";
import PropTypes from "prop-types";
import ModalContext from "./ModalContext";
import IconButton from "theme/ui/atoms/Icon/IconButton";

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

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalHeader;
