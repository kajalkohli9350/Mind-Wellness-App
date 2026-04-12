import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <h2>Mental Wellness App</h2>

      <p className="footer-desc">
        This application helps users improve mental health through mood tracking,
        breathing exercises, motivation quotes and relaxing music.
      </p>

      <p className="footer-tech">
        Tech Stack: MERN (MongoDB, Express, React, Node.js)
      </p>

      <p className="footer-dev">
        Developed by Kajal
      </p>

      <div className="footer-links">
        <p>GitHub: https://github.com/kajalkohli9350</p>
        <p>Email: kohlikajal00@email.com</p>
      </div>

      <p className="copyright">
        © 2026 Mental Wellness App. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;