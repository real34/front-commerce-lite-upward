import React from "react";

const Logo = ({ logo, alt }) => (
  <span className="logo">
    <img src={logo} alt={alt} />
  </span>
);

export default Logo;
