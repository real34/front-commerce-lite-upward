import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ children }) => <p>{children}</p>;

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
};

export default Paragraph;
