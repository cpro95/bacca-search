import React from "react";
import Navbar from "./navbar";


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
        <div className="container">
          <h1 className="display-4 text-white">Search Pattern</h1>
          <p className="lead text-white">inside of my DB</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
