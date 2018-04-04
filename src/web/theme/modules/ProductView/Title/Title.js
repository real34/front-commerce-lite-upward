import React from "react";

const Title = ({ children, sku }) => (
  <h1>
    {children}
    {sku && <small> ({sku})</small>}
  </h1>
);

export default Title;
