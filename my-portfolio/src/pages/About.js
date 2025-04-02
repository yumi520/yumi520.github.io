// src/components/About.js
import React from 'react';
import '../stylesheet/About.css';
import Portrait from '../assets/IMG_9214.jpg';
import Gallery from '../components/Gallery';
import Button from '../components/shared/Button';

function About() {
  return (
    <section class="top-section">
        <section className="bio-section">

            <div className="image-button-section">

                <img src={Portrait} alt="me!"></img>
                <div className="resume-container">
                    <Button href="https://drive.google.com/file/d/1DpeLBHiJrOjnFw6aeEbVx4zoxPNHJFpF/view?usp=sharing" className="resume-button">
                        Resume ↓
                    </Button>
                </div>

            </div>    
                
            <div className="word-section"> 
            <section className="heading-paragraph">
            <h1><mark className="hello">Hello!&nbsp;</mark> I'm Yumiko.</h1>
                <p> 
                I am a 2nd year student at Northeastern University, majoring in Computer Science and Design with a concentration in Interaction Design.
                <mark className="highlight-p"> I'm passionate about creating digital designs and applications that are both efficient and highly usable. </mark>
                I enjoy solving problems and have a keen interest in computer and data science, human-computer interaction, and social advocacy.
               <mark className="highlight-p"> My focus is on making design accessible and centered around human needs. </mark>
                </p>
            </section>

                <ul>
                    <li><span className="experience">Some of my relevant experience:</span></li>
                    <li>
                    ⟡ Software Engineer @ <a href="https://hackbeanpot.com/" target="_blank" rel="noopener noreferrer">HackBeanpot, Inc.</a>
                    </li>

                    <li>
                    ⟡ Communications Assistant @ <a href="https://cetr.sites.northeastern.edu/" target="_blank" rel="noopener noreferrer">CETR, Northeastern</a>
                    </li>

                    <li>
                    ⟡ Designer @ <a href="https://cic.northeastern.edu/" target="_blank" rel="noopener noreferrer">Center for Inclusive Computing</a>
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