import React from "react";
import PropTypes from "prop-types";

const Title = ({ children, sku }) => (
  <h1>
    {children}
    {sku && <small> ({sku})</small>}
  </h1>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  sku: PropTypes.string.isRequired
};

export default Title;
