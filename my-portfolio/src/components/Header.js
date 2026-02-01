// src/components/Header.js
import React from 'react';
import '../stylesheet/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <nav>
          <ul className="pages">
            <li className="logo"> <Link to="/"> YUMIKO CHOW</Link></li>
            <li className="works-link"> <Link to="/code"> DEV </Link></li>
            <li className="works-link"> <Link to="/design"> UI/UX </Link></li>
            <li className="works-link"> <Link to="/playground"> PLAY </Link></li>
            <li className="about-me"> <Link to="/about"> ABOUT </Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
