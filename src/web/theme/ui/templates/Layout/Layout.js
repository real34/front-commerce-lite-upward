import React from "react";
import Header from "../../../modules/Header";
import Footer from "../../../modules/Footer";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
