import React from "react";
import "./Layout.scss";

const Layout = ({ children, header, footer }) => {
  return (
    <div className="container">
      {header}
      {children}
      {footer}
    </div>
  );
};

export default Layout;
