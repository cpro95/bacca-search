import React from "react";
import Navbar from "./navbar";

import logo from "../assets/logo.svg";

const Header = () => {
  const heroStyle = {
    opacity: "0.95",
    background: "#499bea"
  };

  return (
    <section>
      <Navbar />
      <div
        className="jumbotron jumbotron-fluid"
        style={heroStyle}
      >
        <div className="container pt-4">
        <img className="app-logo" src={logo} alt="logo" height="70" />
          <h1 className="display-4 text-white">Search My Data</h1>
          <p className="lead text-white">inside of my DB</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
