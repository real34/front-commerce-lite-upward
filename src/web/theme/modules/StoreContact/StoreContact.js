import React from "react";
import PropTypes from "prop-types";
import Paragraph from "../../ui/atoms/Typography/Paragraph";
import Link from "../../ui/atoms/Typography/Link";

const StoreContact = ({ phone }) => {
  return (
    <Paragraph>
      Need help? Call us at{" "}
      <Link to={`tel:${phone}`} external>
        {phone}
      </Link>
    </Paragraph>
  );
};

StoreContact.propTypes = {
  phone: PropTypes.string.isRequired
};

export default StoreContact;
