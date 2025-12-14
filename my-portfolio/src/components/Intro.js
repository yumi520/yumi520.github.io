// src/components/Intro.js
import React from 'react';
import '../stylesheet/Intro.css';
import Projects from './Projects';
import Drawing from '../assets/portfolio-image-1 3.png';

function Intro() {
  return (
    <section className="intro-page">
      <section className="first-section">
        <img src={Drawing} alt="drawing of Yumiko"></img>
        <p className="intro-paragraph">
        I'm Yumiko, a 3rd year at Northeastern University with an interest 
        on developing skills in both software development and intuitive 
        design with curiosity about storytelling.
        </p>

        {/* <span className="my-works">↓ Works ↓</span> */}
      </section>
        <Projects />
    </section>
  );
}

export default Intro;