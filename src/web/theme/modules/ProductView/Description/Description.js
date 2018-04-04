import React from "react";
import PropTypes from "prop-types";

const Description = ({ children }) =>
  children && (
    <div
      className="product-description"
      dangerouslySetInnerHTML={{
        __html: children
      }}
    />
  );

Description.propTypes = {
  children: PropTypes.node.isRequired
};

export default Description;
