import React from "react";
import PropTypes from "prop-types";

const H3 = ({ children, itemProp }) => {
  return <h3 itemProp={itemProp}>{children}</h3>;
};

H3.propTypes = {
  children: PropTypes.node.isRequired,
  itemProp: PropTypes.string
};

export default H3;
