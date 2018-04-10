import React from "react";
import arrowLeft from "./arrow-left.svg?inline";

const Icon = ({ icon }) => {
  if (icon === "arrow-left") {
    return (
      <span
        className="icon"
        dangerouslySetInnerHTML={{ __html: arrowLeft }}
        title="Go back"
      />
    );
  }

  return <span className={`icon fa fa-${icon}`} />;
};

export default Icon;
