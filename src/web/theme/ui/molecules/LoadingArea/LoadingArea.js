import React from "react";
import PropTypes from "prop-types";
import Spinner from "../../atoms/Spinner";

const LoadingArea = ({ children }) => {
  return (
    <div className="loading-area">
      <Spinner />
      {children && <p>{children}</p>}
    </div>
  );
};

LoadingArea.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoadingArea;
