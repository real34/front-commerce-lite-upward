import React from "react";
import PropTypes from "prop-types";

const Description = ({ children }) =>
  children && (
    <div
      dangerouslySetInnerHTML={{
        __html: children
      }}
    />
  );

Description.propTypes = {
  children: PropTypes.node.isRequired
};

export default Description;
