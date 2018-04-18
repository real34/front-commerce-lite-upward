import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ onClick, children, status, type }) => {
  return (
    <button
      onClick={
        status === "disabled"
          ? e => {
              e.preventDefault();
            }
          : onClick
      }
      className={`button${type ? " " + type : ""}`}
      type={type}
    >
      {status === "loading" ? "…" : children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
  type: PropTypes.oneOf(["default", "invisible", "full-size"])
};

export default Button;
