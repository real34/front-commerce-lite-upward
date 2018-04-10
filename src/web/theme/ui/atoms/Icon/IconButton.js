import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
import Button from "theme/ui/atoms/Button";

const IconButton = ({ icon, onClick }) => {
  return (
    <Button type="invisible" onClick={onClick}>
      <Icon icon={icon} />
    </Button>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
};

export default IconButton;
