import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Raj Shrivastava & Associates</div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
          <li><Link to="/people" onClick={handleLinkClick}>People</Link></li>
          <li><Link to="/practice" onClick={handleLinkClick}>Practice Areas</Link></li>
          <li><Link to="/awareness" onClick={handleLinkClick}>Awareness</Link></li>
          <li><Link to="/media" onClick={handleLinkClick}>Media Coverage</Link></li>
          <li><Link to="/testimonials" onClick={handleLinkClick}>Testimonials</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Get in Touch</Link></li>
        </ul>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
