import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-container">
        <div className="contact-container">
            <h4>WeddingPhotography@gmail.com</h4>
            <h6>Phone.no - XXXXXXXXXXX</h6>
        </div>
      <p>
        <small>CopyRight @ {year} Wedding Photography</small>
      </p>
    </div>
  );
};

export default Footer;
