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
            <li className="works-link"> <Link to="/" state={{ scrollTo: 'featured-design' }}> PROJECTS </Link></li>
            <li className="about-me"> <Link to="/about"> ABOUT </Link></li>
            <li className="works-link"> <a href="https://drive.google.com/file/d/1GEgbT9aLJLC_Pk0kkk6-Z1qvGmXyOEZL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="header-resume"> RESUME </a></li>

          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
