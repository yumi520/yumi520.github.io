// src/components/About.js
import React from 'react';
import '../stylesheet/About.css';
import Portrait from '../assets/20250601200948_IMG_6829_Original.jpg';
import MeSitting from '../assets/me_sitting.png';
import Gallery from '../components/Gallery';

function About() {
  return (
    <section class="top-section">
        <section className="bio-section">

            <div className="image-button-section">
                <img src={Portrait} alt="me!" className="portrait-me"></img>
                <img src={MeSitting} alt="me sitting" className="portrait-me"></img>
            </div>    
                
            <div className="word-section"> 
            <section className="heading-paragraph">
            <h1><mark className="hello">Hello!&nbsp;</mark></h1>
                <p> 
                I'm Yumiko (Yumi), a student at Northeastern University studying Computer Science & Design with concentrations UX Design. 
                <mark className="highlight-p">I'm passionate about creating applications that are both efficient and highly usable. </mark>
                I enjoy solving problems and have a keen interest in full-stack and infrastructure, human-computer interaction, and social advocacy.
               <mark className="highlight-p"> My focus is on making computing accessible and centered around human needs. </mark>
                </p>
            </section>

                <ul>
                    <li><span className="experience">Experiences</span></li>
                    <li>
                    ⟡ Software Engineer Intern @ <a href="https://workspace.google.com/" target="_blank" rel="noopener noreferrer">Google Workspace</a>
                    </li>
                    <li>
                    ⟡ Associate Software Developer Intern (STEP) @ <a href="https://mapsplatform.google.com/" target="_blank" rel="noopener noreferrer">Google Maps</a>
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