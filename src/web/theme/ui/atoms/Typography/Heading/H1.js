import React from "react";
import PropTypes from "prop-types";

const H1 = ({ children, itemProp }) => {
  return <h1 itemProp={itemProp}>{children}</h1>;
};

H1.propTypes = {
  children: PropTypes.node.isRequired,
  itemProp: PropTypes.string
};

export default H1;
