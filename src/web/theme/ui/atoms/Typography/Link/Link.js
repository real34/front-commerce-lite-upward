import React from "react";
import PropTypes from "prop-types";
import Link from "react-router-dom/Link";
import "./Link.scss";

const LinkComponent = ({ to, children, external, onClick, type }) => {
  return external ? (
    <a
      href={to}
      className={type}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <Link className={type} to={to} onClick={onClick}>
      {children}
    </Link>
  );
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["external"])
};

export default LinkComponent;
