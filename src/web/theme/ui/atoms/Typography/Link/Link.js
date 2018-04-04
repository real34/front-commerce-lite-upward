import React from "react";
import PropTypes from "prop-types";
import Link from "react-router-dom/Link";

const LinkComponent = ({ to, children, external, onClick }) => {
  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link to={to} onClick={onClick}>
      {children}
    </Link>
  );
};

LinkComponent.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]),
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
  onClick: PropTypes.func
};

export default LinkComponent;
