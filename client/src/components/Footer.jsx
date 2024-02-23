import React from "react";
import Logo from "../img/logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      <img src={Logo} alt="" />
      <span>copyright &copy; 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
