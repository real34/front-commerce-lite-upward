import React from "react";
import PropTypes from "prop-types";

const StoreDetails = ({ owner }) => (
  <div>
    <h2>Your contact today: {owner.displayName}</h2>
    <img src={owner.picture} alt="" />
    <p>
      Email: <a href={`mailto:${owner.email}`}>{owner.email}</a>
    </p>
  </div>
);

StoreDetails.propTypes = {
  owner: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string
  })
};

export default StoreDetails;
