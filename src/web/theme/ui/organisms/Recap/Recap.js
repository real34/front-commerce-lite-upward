import React from "react";
import PropTypes from "prop-types";
import "./Recap.scss";

const Recap = ({ children, total }) => {
  return (
    <div className="recap">
      {children}
      <div className="recap__total">{total}</div>
    </div>
  );
};

Recap.propTypes = {
  children: PropTypes.node.isRequired,
  total: PropTypes.node.isRequired
};

export default Recap;
