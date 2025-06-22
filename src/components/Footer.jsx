import React from "react";

function Footer() {
  return (
    <footer className="footer show-animate">
      <div className="footer-text">
        <p>Copyright © 2025 by Jeevan Patidar | All Rights Reserved.</p>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </div>

      <div className="footer-iconTop">
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
        <span className="animate scroll" style={{ "--i": 3 }}></span>
      </div>
    </footer>
  );
}

export default Footer;
