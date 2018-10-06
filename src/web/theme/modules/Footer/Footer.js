import React from "react";
// import PropTypes from "prop-types";
// import StoreDetails from "../StoreDetails";
// import StoreContact from "../StoreContact";
// import EnhanceFooter from "./EnhanceFooter";
// import FooterQuery from "./FooterQuery.gql";
import Link from "theme/ui/atoms/Typography/Link";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      {/*store && store.owner && <StoreDetails owner={store.owner} />}
      {store && store.phone && <StoreContact phone={store.phone} />*/}
      Made with ❤️ by the{" "}
      <Link to="https://www.front-commerce.com" external>
        Front-Commerce team
      </Link>
    </footer>
  );
};

Footer.propTypes = {
  // store: PropTypes.shape({
  //   owner: StoreDetails.propTypes.owner,
  //   phone: StoreContact.propTypes.phone
  // })
};

// export default EnhanceFooter(FooterQuery)(Footer);
export default Footer;
