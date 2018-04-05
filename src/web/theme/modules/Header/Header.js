import React from "react";
import Search from "./Search";
import Navigation from "./Navigation";
import Logo from "../../ui/atoms/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__nav">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
