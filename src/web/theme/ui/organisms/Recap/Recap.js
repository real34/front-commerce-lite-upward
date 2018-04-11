import React from "react";
import PropTypes from "prop-types";
import "./Recap.scss";

const Recap = ({ children, result }) => {
  return (
    <div className="recap">
      {children}
      <div className="recap__result">{result}</div>
    </div>
  );
};

Recap.propTypes = {
  children: PropTypes.node.isRequired,
  result: PropTypes.node.isRequired
};

export default Recap;
