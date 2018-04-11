import React from "react";
import PropTypes from "prop-types";
import "./Page.scss";

const Page = ({ children }) => {
  return <div className="page">{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
