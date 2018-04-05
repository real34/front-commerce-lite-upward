import React from "react";
import PropTypes from "prop-types";
import { H1 } from "../../atoms/Typography/Heading";

const HeadingWithAddon = ({ children, addon }) => {
  return (
    <H1>
      {children}
      {addon && <small>{addon}</small>}
    </H1>
  );
};

HeadingWithAddon.propTypes = {
  children: PropTypes.node.isRequired,
  addon: PropTypes.node
};

export default HeadingWithAddon;
