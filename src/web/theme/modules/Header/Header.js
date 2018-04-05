import React from "react";
import Search from "./Search";
import Navigation from "./Navigation";
import Logo from "../../ui/atoms/Logo";

const Header = () => {
  return (
    <header>
      <Logo />
      <Search />
      <Navigation />
    </header>
  );
};

export default Header;
