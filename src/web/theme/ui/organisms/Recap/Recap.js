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
  children: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Recap;
