import React from "react";
import PropTypes from "prop-types";
import { H1 } from "../../../ui/atoms/Typography/Heading";

const Title = ({ children, sku }) => (
  <H1>
    {children}
    {sku && <small> ({sku})</small>}
  </H1>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  sku: PropTypes.string.isRequired
};

export default Title;
