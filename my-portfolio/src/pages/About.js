// src/components/About.js
import React from 'react';
import '../stylesheet/About.css';
import Portrait from '../assets/20250601200948_IMG_6829_Original.jpg';
import Gallery from '../components/Gallery';
import Button from '../components/shared/Button';

function About() {
  return (
    <section class="top-section">
        <section className="bio-section">

            <div className="image-button-section">

                <img src={Portrait} alt="me!" className="portrait-me"></img>
                <div className="resume-container">
                    <Button href="https://drive.google.com/file/d/1INPAFc_mTzVUSNIMiW9CnnyNNVRwY0QN/view?usp=sharing" className="resume-button">
                        Resume ↓
                    </Button>
                </div>

            </div>    
                
            <div className="word-section"> 
            <section className="heading-paragraph">
            <h1><mark className="hello">Hello!&nbsp;</mark> I'm Yumiko.</h1>
                <p> 
                I am a 3rd year student at Northeastern University, majoring in Computer Science.
                <mark className="highlight-p"> I'm passionate about creating applications that are both efficient and highly usable. </mark>
                I enjoy solving problems and have a keen interest in full-stack and infrastructure, human-computer interaction, and social advocacy.
               <mark className="highlight-p"> My focus is on making computing accessible and centered around human needs. </mark>
                </p>
            </section>

                <ul>
                    <li><span className="experience">Some of my relevant experience:</span></li>
                    <li>
                    ⟡ Associate Software Developer Intern (STEP) @ <a href="https://mapsplatform.google.com/" target="_blank" rel="noopener noreferrer">Google</a>
                    </li>

                    <li>
                    ⟡ Software Engineer Intern @ <a href="https://www.ukg.com/" target="_blank" rel="noopener noreferrer">Ultimate Kronos Group (UKG)</a>
                    </li>
                    <li>
                    ⟡ Software Engineer @ <a href="https://hackbeanpot.com/" target="_blank" rel="noopener noreferrer">HackBeanpot, Inc.</a>
                    </li>

                </ul>

                <span>
                Outside of the workplace, you can find me painting, playing games, getting sweet treats, and petting my cat!
                </span>


            </div>
        </section>
        <Gallery />
    </section>
  );
}

export default About;