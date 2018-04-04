import React from "react";
import PropTypes from "prop-types";

const HeroImage = ({ path, alt }) => {
  return (
    <div className="hero-image">
      <img src={path} alt={alt} />
    </div>
  );
};

HeroImage.propTypes = {
  path: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default HeroImage;
