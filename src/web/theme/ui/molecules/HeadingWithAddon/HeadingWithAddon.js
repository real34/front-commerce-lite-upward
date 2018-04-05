import React from "react";
import PropTypes from "prop-types";
import { H1 } from "../../atoms/Typography/Heading";
import "./HeadingWithAddon.scss";

const HeadingWithAddon = ({ children, addon }) => {
  return (
    <div className="heading-with-addon">
      <H1>
        {children}
        {addon && <small>{addon}</small>}
      </H1>
    </div>
  );
};

HeadingWithAddon.propTypes = {
  children: PropTypes.node.isRequired,
  addon: PropTypes.node
};

export default HeadingWithAddon;
