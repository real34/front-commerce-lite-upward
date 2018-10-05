import React from "react";
import PropTypes from "prop-types";

const Sku = ({ sku }) => {
  return (
    <span className="sku">
      SKU&nbsp;
      {sku}
    </span>
  );
};

Sku.propTypes = {
  sku: PropTypes.string
};

export default Sku;
