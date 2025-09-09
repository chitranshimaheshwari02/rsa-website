import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © <span>{new Date().getFullYear()}</span> Raj Shrivastava & Associates. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
