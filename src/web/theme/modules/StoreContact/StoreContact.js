import React from "react";
import PropTypes from "prop-types";

const StoreContact = ({ phone }) => {
  return (
    <p>
      Need help? Call us at <a href={`tel:${phone}`}>{phone}</a>
    </p>
  );
};

StoreContact.propTypes = {
  phone: PropTypes.string.isRequired
};

export default StoreContact;
