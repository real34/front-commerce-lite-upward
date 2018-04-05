import React from "react";
import PropTypes from "prop-types";

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
      className={status}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
  type: PropTypes.string
};

export default Button;
