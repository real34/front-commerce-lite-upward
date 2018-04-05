import React from "react";
import PropTypes from "prop-types";
import StoreDetails from "../StoreDetails";
import StoreContact from "../StoreContact";
import EnhanceFooter from "./EnhanceFooter";
import FooterQuery from "./FooterQuery.gql";

const Footer = ({ store }) => {
  return (
    <footer>
      {store && store.owner && <StoreDetails owner={store.owner} />}
      {store && store.phone && <StoreContact phone={store.phone} />}
    </footer>
  );
};

Footer.propTypes = {
  store: PropTypes.shape({
    owner: StoreDetails.propTypes.owner,
    phone: StoreContact.propTypes.phone
  })
};

export default EnhanceFooter(FooterQuery)(Footer);
