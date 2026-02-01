// src/components/Intro.js
import React from 'react';
import '../stylesheet/Intro.css';
import Drawing from '../assets/portfolio-image-1 3.png';

function Intro() {
  return (
    <section className="intro-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hey there, I'm <span className="me-animated">Yumiko Chow</span>.
          </h1>
          <p className="hero-tagline">
          Boston-based developer and designer turning complex systems into accessible, human-centered software.
          </p>
        </div>
        <img src={Drawing} alt="drawing of Yumiko" className="hero-image" />
      </section>
    </section>
  );
}

export default Intro;