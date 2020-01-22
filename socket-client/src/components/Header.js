import React from "react";
import "./Header.css";
import NavLogin from "./NavLogin";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header id="app-header">
      <Link to="/chat">
        <h1>Nothing Lasts</h1>
      </Link>
      <NavLogin />
    </header>
  );
};

export default Header;
