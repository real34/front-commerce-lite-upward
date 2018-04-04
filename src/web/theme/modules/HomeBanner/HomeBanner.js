import React from "react";
import PropTypes from "prop-types";

const HomeBanner = ({ storeName }) => {
  return (
    <div className="home-banner">
      <h1>{storeName ? `Welcome on ${storeName}` : "Welcome"}</h1>
    </div>
  );
};

HomeBanner.propTypes = {
  storeName: PropTypes.string
};

export default HomeBanner;
