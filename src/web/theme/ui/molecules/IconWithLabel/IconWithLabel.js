import React from "react";
import PropTypes from "prop-types";
import Icon from "theme/ui/atoms/Icon";
import "./IconWithLabel.scss";

const IconWithLabel = ({ icon, children }) => {
  return (
    <span className="icon-with-label">
      <Icon icon={icon} />
      {children}
    </span>
  );
};

IconWithLabel.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default IconWithLabel;
