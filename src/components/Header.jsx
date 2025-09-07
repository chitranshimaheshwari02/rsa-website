import React from "react";
import "./Header.scss";

const Header = () => {
  console.log("Header component rendered");

  return (
    <header id="home" className="hero">
      <div className="hero-content">
        <h1>
          Raj Shrivastava <span>and Associates</span>
        </h1>
        <h3>Advocates & Legal Consultants</h3>
        <p>
          Excellence in Legal Practice • Commitment to Justice • Trusted Legal Counsel
        </p>
        <button className="btn-primary">Get Legal Consultation</button>
      </div>
    </header>
  );
};

export default Header;
