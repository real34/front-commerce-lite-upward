import React from "react";

const Description = ({ children }) =>
  children && (
    <div
      dangerouslySetInnerHTML={{
        __html: children
      }}
    />
  );

export default Description;
