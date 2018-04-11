import React from "react";
import PropTypes from "prop-types";
import arrowLeft from "./arrow-left.svg?inline";
import close from "./close.svg?inline";
import trash from "./trash.svg?inline";
import cart from "./cart.svg?inline";
import "./Icon.scss";

const Icon = ({ icon }) => {
  if (icon === "arrow-left") {
    return (
      <span
        className="icon"
        dangerouslySetInnerHTML={{ __html: arrowLeft }}
        title="Go back"
      />
    );
  } else if (icon === "close") {
    return (
      <span
        className="icon"
        dangerouslySetInnerHTML={{ __html: close }}
        aria-label="Close"
        title="Close"
      />
    );
  } else if (icon === "trash") {
    return (
      <span
        className="icon"
        dangerouslySetInnerHTML={{ __html: trash }}
        aria-hidden={true}
      />
    );
  } else if (icon === "cart") {
    return (
      <span
        className="icon"
        dangerouslySetInnerHTML={{ __html: cart }}
        aria-hidden={true}
      />
    );
  }

  return icon;
};

Icon.propTypes = {
  icon: PropTypes.oneOf(["arrow-left", "close", "trash", "cart"]).isRequired
};

export default Icon;
