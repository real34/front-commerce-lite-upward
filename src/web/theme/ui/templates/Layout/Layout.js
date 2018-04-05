import React from "react";
import EnhanceLayout from "./EnhanceLayout";
import Header from "../../../modules/Header";
import Footer from "../../../modules/Footer";
import LayoutQuery from "./LayoutQuery.gql";

const Layout = ({ children, store }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer store={store} />
    </div>
  );
};

export default EnhanceLayout(LayoutQuery)(Layout);
