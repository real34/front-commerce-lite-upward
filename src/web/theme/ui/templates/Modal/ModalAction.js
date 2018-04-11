import React from "react";
import PropTypes from "prop-types";

const ModalAction = props => {
  return <div className="modal__action">{props.children}</div>;
};

ModalAction.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalAction;
