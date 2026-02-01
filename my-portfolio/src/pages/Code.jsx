import Button from '../components/shared/Button.js';
import '../stylesheet/Projects.css';
import HBP from "../assets/HBP.png";
import BCAN from "../assets/BCAN.png";
// import BHCPH from "../assets/BHCPH.png"

function Code() {
    return (
        <section className="intro-page">
            <section className="works-section">
                <h2 className="playground-title">Featured Code Work</h2>
                <section className="sunney-showcase">
                    <img src={BCAN} className="Sunney" alt="Boston Climate Action Network"></img>
                    <div className="description-section">
                        <h3>Boston Climate Action Network</h3>
                        <h4>Full-Stack Grant Tracking Portal</h4>
                        <p>Created for BCAN, a non-profit organization that organizes Boston residents and collaborate with other social justice allies to advocate for climate justice </p>
                        <div className="sunney-anchor">
                            <Button href="https://github.com/Code-4-Community/bcan" className="sunney-button" type="Button" target="_blank" rel="noopener noreferrer">View Full Project →</Button>
                        </div>
                    </div>
                </section>
                
                {/* <section className="sunney-showcase">
                    <img src={BHCPH} className="Sunney" alt="Boston Health Care Program placeholder - replace with actual screenshot"></img>
                    <div className="description-section">
                        <h3>Boston Health Care Program</h3>
                        <h4>Full-Stack Volunteer Recruitment Portal</h4>
                        <p>Created for BHCPH, a non-profit organization that provides health care access to individuals experiencing homelessness across the Boston community</p>
                        <div className="sunney-anchor">
                            <Button href="https://github.com/Code-4-Community/proj-bhchp" className="sunney-button" type="Button" target="_blank" rel="noopener noreferrer">View Full Project →</Button>
                        </div>
                    </div>
                </section> */}
                
                <section className="sunney-showcase">
                    <img src={HBP} className="Sunney" alt="HackBeanpot placeholder - replace with actual screenshot"></img>
                    <div className="description-section">
                        <h3>HackBeanpot</h3>
                        <h4>Full-Stack Website App</h4>
                        <p>Created for HackBeanpot, a hackathon at Northeastern University for beginners</p>
                        <div className="sunney-anchor">
                            <Button href="https://www.hackbeanpot.com/" className="sunney-button" type="Button" target="_blank" rel="noopener noreferrer">View Full Project →</Button>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Code;