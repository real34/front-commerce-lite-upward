import React from "react";
import PropTypes from "prop-types";
import { H1 } from "../../ui/atoms/Typography/Heading";

const HomeBanner = ({ storeName }) => {
  return (
    <div className="home-banner">
      <H1>{storeName ? `Welcome on ${storeName}` : "Welcome"}</H1>
    </div>
  );
};

HomeBanner.propTypes = {
  storeName: PropTypes.string
};

export default HomeBanner;
