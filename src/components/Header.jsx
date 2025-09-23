import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Raj Shrivastava <span>and Associates</span>
        </h1>

        <div className="decorative-line"></div>

        <h3 className="hero-tagline">Advocates & Legal Consultants</h3>
        <p className="hero-description">
          Excellence in Legal Practice • Commitment to Justice • Trusted Legal Counsel
        </p>
        <button className="hero-cta btn-primary">Get Legal Consultation</button>
      </div>
    </header>
  );
};

export default Header;