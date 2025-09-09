// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.scss";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Raj Shrivastava & Associates</div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//         <li><Link to="/people">People</Link></li>
//         <li><Link to="/practice">Practice Areas</Link></li>
//         <li><Link to="/awareness">Awareness</Link></li>
//         <li><Link to="/media">Media Coverage</Link></li>
//         <li><Link to="/testimonials">Testimonials</Link></li>
//         <li><Link to="/contact">Get in Touch</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.scss";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">Raj Shrivastava & Associates</div>

//       {/* Hamburger Menu */}
//       <div className="hamburger" onClick={toggleMenu}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       {/* Nav Links */}
//       <ul className={`nav-links ${isOpen ? "active" : ""}`}>
//         <li><Link to="/" onClick={closeMenu}>Home</Link></li>
//         <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
//         <li><Link to="/people" onClick={closeMenu}>People</Link></li>
//         <li><Link to="/practice" onClick={closeMenu}>Practice Areas</Link></li>
//         <li><Link to="/awareness" onClick={closeMenu}>Awareness</Link></li>
//         <li><Link to="/media" onClick={closeMenu}>Media Coverage</Link></li>
//         <li><Link to="/testimonials" onClick={closeMenu}>Testimonials</Link></li>
//         <li><Link to="/contact" onClick={closeMenu}>Get in Touch</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Raj Shrivastava & Associates</div>

      {/* Links (hidden on mobile via CSS) */}
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
