import React from 'react';
import '../stylesheet/Footer.css';

function Footer() {
  return (
    <footer>
      <section className="footer-nav">
        <span>You made it to the bottom! While you're here, let's connect.</span>
        <ul>
          <li><a href="mailto:chow.y@northeastern.edu">EMAIL</a></li>
          <li><a href="https://www.linkedin.com/in/yumiko-chow/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
          <li><a href="https://github.com/yumi520" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;