import React from "react";

const StoreDetails = ({ owner }) => (
  <div>
    <h2>Your contact today: {owner.displayName}</h2>
    <img src={owner.picture} alt="" />
    <p>
      Email: <a href={`mailto:${owner.email}`}>{owner.email}</a>
    </p>
  </div>
);

export default StoreDetails;
