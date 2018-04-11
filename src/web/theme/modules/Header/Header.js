import React from "react";
import Navigation from "./Navigation";
import Link from "theme/ui/atoms/Typography/Link";
import Logo from "theme/ui/atoms/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="header__nav">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
