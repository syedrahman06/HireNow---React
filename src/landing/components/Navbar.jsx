import React from "react";
import "./Navbar.scss";
import logo from "../Assets/logo.svg";
const Navbar = () => {
  return (
    <div className="landing-navbar">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <a href="#form" className="hire-now">
        Hire Now
      </a>
    </div>
  );
};

export default Navbar;
