import React from 'react';
import '../stylesheet/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <section className="footer-nav">
        <span>© 2025 made with love</span>
        <span>personal website</span>
        <ul>
          <li><a href="https://github.com/yumi520" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://www.linkedin.com/in/yumiko-chow/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          <li><a href="mailto:chow.y@northeastern.edu">Email</a></li>
        </ul>
      {/* <ul className="bottom">
        <li><Link to="/">Works</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul> */}
      </section>
    </footer>
  );
}

export default Footer;