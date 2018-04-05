import React from "react";

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
