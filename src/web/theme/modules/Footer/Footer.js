import React from "react";
import PropTypes from "prop-types";
import StoreDetails from "../StoreDetails";
import StoreContact from "../StoreContact";

const Footer = ({ store }) => {
  return (
    <footer>
      {store && store.owner && <StoreDetails owner={store.owner} />}
      {store && store.phone && <StoreContact phone={store.phone} />}
    </footer>
  );
};

Footer.propTypes = {
  store: PropTypes.oneOfType([
    PropTypes.shape({
      owner: PropTypes.shape({
        gender: PropTypes.string,
        displayName: PropTypes.string,
        email: PropTypes.string,
        picture: PropTypes.string
      }),
      phone: PropTypes.string
    }),
    PropTypes.bool
  ])
};
export default Footer;
