import React from "react";
import PropTypes from "prop-types";

const ModalContent = props => {
  return <div className="modal__content">{props.children}</div>;
};

ModalContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalContent;
