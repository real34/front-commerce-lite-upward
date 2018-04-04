import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, disabled, pending, type }) => {
  const buttonClasses = `${disabled ? "disabled" : ""}${
    pending ? " pending" : ""
  }`;

  return (
    <button
      onClick={
        disabled
          ? e => {
              e.preventDefault();
            }
          : onClick
      }
      className={buttonClasses}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
  type: PropTypes.string
};

export default Button;
