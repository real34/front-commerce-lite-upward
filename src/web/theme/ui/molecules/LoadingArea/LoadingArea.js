import React from "react";
import PropTypes from "prop-types";
import Spinner from "../../atoms/Spinner";
import Paragraph from "../../atoms/Typography/Paragraph";

const LoadingArea = ({ children }) => {
  return (
    <div className="loading-area">
      <Spinner />
      {children && <Paragraph>{children}</Paragraph>}
    </div>
  );
};

LoadingArea.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoadingArea;
