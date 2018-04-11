import React from "react";
import PropTypes from "prop-types";
import Paragraph from "theme/ui/atoms/Typography/Paragraph";
import "./LoadingArea.scss";

const LoadingArea = ({ children }) => {
  return (
    <div className="loading-area">
      {children && <Paragraph>{children}</Paragraph>}
    </div>
  );
};

LoadingArea.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoadingArea;
