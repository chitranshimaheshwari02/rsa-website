import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Raj Shrivastava & Associates</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/practice">Practice Areas</Link></li>
        <li><Link to="/awareness">Awareness</Link></li>
        <li><Link to="/media">Media Coverage</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Get in Touch</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

