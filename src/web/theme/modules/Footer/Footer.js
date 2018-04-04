import React from "react";
import StoreDetails from "../StoreDetails";
import StoreContact from "../StoreContact";

const Footer = ({ store }) => {
  return (
    <footer>
      {store && store.owner && <StoreDetails owner={store.owner} />}
      {store && store.phone && <StoreContact phone={store.phone} />}
    </footer>
  );
};

export default Footer;
