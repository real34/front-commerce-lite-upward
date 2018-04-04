import React from "react";
import PropTypes from "prop-types";

const H2 = ({ children, itemProp }) => {
  return <h2 itemProp={itemProp}>{children}</h2>;
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
  itemProp: PropTypes.string
};

export default H2;
