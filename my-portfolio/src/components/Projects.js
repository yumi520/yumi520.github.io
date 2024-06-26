import React from 'react';
import '../stylesheet/Projects.css'
import sunneyMockBG from '../assets/sunneyMockBG.png';
import Button from '../components/Button.js'
import ChristmasDesignerScreen from '../assets/christmasDesignerScreen.png';
//import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section className="works-section">
        {/* <h2 className="works-title">My Works</h2> */}

        <section className="sunney-showcase">
            <img src={sunneyMockBG} class="Sunney" alt="Second app mockup of Sunney"></img>
            

            <div className="description-section">
                <h3>Sunney</h3>
                <h4>UI/UX Design: Mobile App </h4>
                <p>Redesign Project from Experience and Interaction Design</p>

                <div className="sunney-anchor">
                    {/* <Link to="/sunney" className="case-study-button">View Full Project ↓</Link> */}
                    <Button to="/sunney" className="case-study-button">View Full Project ↓</Button>
                </div>
            </div>
        </section>

    <section className="sunney-showcase">
        

        <img src={ChristmasDesignerScreen} class="Sunney" alt="home page for Christmas Designer game"></img>
        <div className="description-section">
            <h3>Christmas Designer</h3>
            <h4>Full-stack Website App</h4>
            <p>Won Best in the Holiday Spirit Hack at Codedex Hackathon</p>
            <div className="sunney-anchor">
                    <Button href="https://github.com/yumi520/holiday-hackathon-yumi-main?tab=readme-ov-file" className="sunney-button" type="Button" target="_blank" rel="noopener noreferrer">View Full Project ↓</Button>
            </div>
        </div>
    </section>


    </section>
  );
}

export default Projects;