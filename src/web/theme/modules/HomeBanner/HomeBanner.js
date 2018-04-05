import React from "react";
import PropTypes from "prop-types";
import HeadingWithAddon from "../../ui/molecules/HeadingWithAddon";

const HomeBanner = ({ storeName }) => {
  return (
    <HeadingWithAddon addon="A light overview of Front-Commerce's features">
      {storeName ? `Welcome on ${storeName}` : "Welcome"}
    </HeadingWithAddon>
  );
};

HomeBanner.propTypes = {
  storeName: PropTypes.string
};

export default HomeBanner;
