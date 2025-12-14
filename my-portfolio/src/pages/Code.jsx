import ChristmasDesignerScreen from '../assets/christmasDesignerScreen.png';
import ChineseRadicalMacbook from '../assets/ChineseRadicalMacbook.png';
import StockSimulator from '../assets/StockSimulator.png';
import Button from '../components/shared/Button.js';
import '../stylesheet/Projects.css';

function Code() {
    return (
        <section className="intro-page">
        <section className="works-section">
            <section className="sunney-showcase">
                {/* <img src={ChristmasDesignerScreen} className="Sunney" alt="home page for Christmas Designer game"></img> */}
                <div className="description-section">
                    <h3>Boston Health Care Program</h3>
                    <h4>Full-Stack Volunteer Recruitment Portal</h4>
                    <p>Site created for BHCPH, a non-profit organization that provides health care access to individuals experiencing homelessness across the Boston community</p>
                    <div className="sunney-anchor">
                            <Button href="https://github.com/Code-4-Community/proj-bhchp" className="sunney-button" type="Button" target="_blank" rel="noopener noreferrer">View Full Project ↓</Button>
                    </div>
                </div>
            </section>
            
            <section className="sunney-showcase">
                {/* <img src={ChristmasDesignerScreen} className="Sunney" alt="home page for Christmas Designer game"></img> */}
                <div className="description-section">
                    <h3>HackBeanpot</h3>
                    <h4>Full-Stack Website App</h4>
                    <p>Site created for HackBeanpot, a hackathon at Northeastern University for beginners</p>
                    <div className="sunney-anchor">
                            <Button href="https://www.hackbeanpot.com/" className="sunney-button" type="Button" target="_blank" rel="noopener noreferrer">View Full Project ↓</Button>
                    </div>
                </div>
            </section>
            <section className="sunney-showcase">
                <img src={ChineseRadicalMacbook} className="Sunney" alt="home page for Radical Chinese game"></img>
                <div className="description-section">
                    <h3>Chinese Radical Guesser</h3>
                    <h4>Node.js Terminal-Based Game</h4>
                    <p>Personal project for interest in improving my Chinese</p>
                    <div className="sunney-anchor">
                            <Button href="https://github.com/yumi520/RadicallyChinese" className="sunney-button" type="Button" target="_blank" rel="noopener noreferrer">View Full Project ↓</Button>
                    </div>
                </div>
            </section>

            <section className="sunney-showcase">
                <img src={StockSimulator} className="Sunney" alt="home page for Radical Chinese game"></img>
                <div className="description-section">
                    <h3>Stock It!</h3>
                    <h4>Java, Java Spring, JUnit</h4>
                    <p>A stock simulator that allows users to buy and sell stocks, manage multiple portfolios, and track real-time portfolio values</p>
                </div>
            </section>

            {/* <section className="sunney-showcase">
                <img src={ChristmasDesignerScreen} className="Sunney" alt="home page for Christmas Designer game"></img>
                <div className="description-section">
                    <h3>Christmas Designer</h3>
                    <h4>Full-Stack Website App</h4>
                    <p>Won Best in the Holiday Spirit Hack at Codedex Hackathon</p>
                    <div className="sunney-anchor">
                            <Button href="https://github.com/yumi520/holiday-hackathon-yumi-main?tab=readme-ov-file" className="sunney-button" type="Button" target="_blank" rel="noopener noreferrer">View Full Project ↓</Button>
                    </div>
                </div>
            </section> */}
        </section>
        </section>
    )
}

export default Code;